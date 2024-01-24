import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { useState } from "react"

export default function ControlButtons({ changeDataType, setDuration, duration, dataType }) {
    const [openFirst, setOpenFirst] = useState(false);
    const [openSecond, setOpenSecond] = useState(false);

    const handleClickFirst = () => {
        setOpenFirst((prev) => !prev);
    };

    const handleClickSecond = () => {
        setOpenSecond((prev) => !prev);
    };

    const handleClickAwayFirst = () => {
        setOpenFirst(false);
    };
    const handleClickAwaySecond = () => {
        setOpenSecond(false);
    };

    return (
        <>
            <ClickAwayListener onClickAway={handleClickAwayFirst}>
                <div onClick={handleClickFirst} className='px-5 w-1/2 gap-3 py-3 border border-zinc-700 hover:bg-zinc-700 flex items-center justify-between cursor-pointer relative'>
                    <button className='whitespace-nowrap'>Data Type</button>
                    <i className='bx bx-chevron-down text-amber-400' ></i>
                    {openFirst && <div className='w-full absolute list-none z-10 top-full left-0 border border-zinc-700 bg-zinc-800'>
                        <li onClick={(e) => { e.stopPropagation(); setOpenFirst(false); changeDataType('prices') }}
                            className={`py-3 px-5 border border-zinc-700 ${dataType === 'prices' && ' text-amber-500'}`}>Price</li>
                        <li onClick={(e) => { e.stopPropagation(); setOpenFirst(false); changeDataType('total_volumes') }} className={`py-3 px-5 border border-zinc-700 ${dataType === 'total_volumes' && ' text-amber-500'}`}>Volume</li>
                    </div>}
                </div>
            </ClickAwayListener>
            <ClickAwayListener onClickAway={handleClickAwaySecond}>
                <div onClick={handleClickSecond} className='px-5 py-3 w-1/2 border border-zinc-700  hover:bg-zinc-700 flex items-center gap-3 cursor-pointer justify-between relative'>
                    <button>Duration</button>
                    <i className='bx bx-chevron-down text-amber-400' ></i>
                    {openSecond && <div className='w-full absolute list-none z-10 top-full left-0 border border-zinc-700 bg-zinc-800'>
                        <li onClick={(e) => { e.stopPropagation(); setOpenSecond(false); setDuration('hourly') }} className={`py-3 px-5 border border-zinc-700 ${duration === 'hourly' && ' text-amber-500'}`}>Hourly</li>
                        <li onClick={(e) => { e.stopPropagation(); setOpenSecond(false); setDuration('daily') }} className={`py-3 px-5 border border-zinc-700 ${duration === 'daily' && ' text-amber-500'}`}>Daily</li>
                    </div>}
                </div>
            </ClickAwayListener >
        </>
    )
}
