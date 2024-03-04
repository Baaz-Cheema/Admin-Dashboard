import { NavLink } from "react-router-dom"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ClickAwayListener } from "@mui/material"
import AirdropModal from "./AirdropModal"
import { useEffect } from "react"
import SearchedItems from "./SearchedItems"
export default function SearchBar() {
    const [open, setOpen] = useState(false)
    const [searchItem, setSearchItem] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = 'hidden'; // Or other preferred method
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openModal]);

    return (
        <main className="mb-10 font-poppins">
            <section className="flex  gap-7  md:hidden">
                <div className="flex items-center relative has-[:focus]:border-amber-400 flex-1 gap-5 bg-zinc-800 border border-zinc-700 py-4 px-3 rounded">
                    <i className="fi fi-rr-search"></i>
                    <input
                        onFocus={() => setIsFocused(true)}
                        onBlur={() =>
                            setTimeout(() => {
                                setIsFocused(false);
                            }, 300)
                        }
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)}
                        className="bg-zinc-800 outline-none w-full max-w-1/2" type="text" placeholder="Search..." />
                    {searchItem && isFocused &&
                        <section className="border border-zinc-700 rounded-b-lg  overflow-auto bg-zinc-750 scroll-none w-[20rem] h-[20rem] left-0 absolute top-[101.2%] z-10">
                            <SearchedItems val={searchItem} setSearchItem={setSearchItem}/>
                        </section>}
                </div>

                <div onClick={() => setOpenModal(true)} className="bg-amber-500 flex items-center text-amber-50 rounded cursor-pointer hover:bg-amber-400">
                    <p className="px-5">See Latest Airdrops</p>
                </div>
                <div className="border-amber-400 border-2 rounded flex items-center hover:bg-amber-400 cursor-pointer">
                    <i className='bx bxs-bell px-5'></i>
                </div>

            </section>
            <div className="flex-1 relative w-full hidden md:flex items-center justify-between py-3">
                <NavLink className="flex items-center gap-2">
                    <div className="w-9">
                        <img src="https://altcoinsbox.com/wp-content/uploads/2023/01/nexa-logo.png" alt="" />
                    </div>
                    <div>
                        <p className="text-[.8rem]">COINSIGHT</p>
                        <p className="text-zinc-400 text-[.5rem]">Visionary Trading</p>
                    </div>

                </NavLink>
                <ClickAwayListener onClickAway={() => setOpen(false)}>
                    <div className="flex gap-5 items-center relative">
                        <AnimatePresence mode="wait">
                            {open ?
                                <motion.div key={'input'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .2 } }} className="flex group has-[:focus]:border-amber-400 relative items-center max-w-[10.8rem] flex-1 py-2 gap-5 bg-zinc-800 border border-zinc-700  px-3 rounded">
                                    <i className="fi fi-rr-search"></i>
                                    <input value={searchItem} onChange={(e) => setSearchItem(e.target.value)} className="bg-zinc-800 w-full outline-none border-none" type="text" placeholder="Search..." autoFocus />
                                </motion.div>
                                :
                                <motion.i key={'icon'} initial={{ opacity: 0, x: -10 }} exit={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 10, y: 2 }} transition={{ duration: .1 }} onClick={() => setOpen(!open)} className="bx bx-search text-4xl " ></motion.i>}
                        </AnimatePresence>
                        <div onClick={() => setOpenModal(true)} className="rounded-full overflow-hidden">
                            <i className='bx bxs-gift bx-tada text-4xl text-amber-400' ></i>
                        </div>
                    </div>
                </ClickAwayListener>
                <AnimatePresence>
                    {searchItem && open &&
                        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border border-zinc-700 rounded-lg overflow-auto bg-zinc-750 scroll-none left-0 right-0 h-[20rem] absolute drop-shadow-lg top-full z-10">
                            <SearchedItems val={searchItem} />
                        </motion.section>}
                </AnimatePresence>
            </div >
            <AnimatePresence>
                {openModal && <AirdropModal setIsOpen={setOpenModal} />}
            </AnimatePresence>
        </main >
    )
}