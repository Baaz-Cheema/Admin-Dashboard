import { motion } from "framer-motion"
import { createPortal } from "react-dom"
import { useState, useEffect } from "react"
import Skeleton from "../UI/Skeleton"
import axios from "axios"

export default function AirdropModal({ setIsOpen }) {
    const [coins, setCoins] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://api.airdropking.io/airdrops/')
            setCoins(response.data)
            setLoading(false)
        }
        getData()
    }, [])
    return (
        createPortal(<>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                exit={{ opacity: 0 }}
                style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0, 0, 0, 0.70)' }}
                className='fixed z-40 top-0 bottom-0 right-0 left-0'
                onClick={() => setIsOpen(false)}
            />
            <motion.dialog
                open
                initial={{ scale: .9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: .9, opacity: 0 }}
                transition={{ type: "spring", duration: .5 }}
                className='bg-zinc-750 rounded-lg fixed top-0 bottom-0 z-50 flex flex-col text-white w-[30rem]  sm:w-[90%] overflow-hidden drop-shadow-2xl'>
                <div className="px-5 pt-5 font-poppins flex justify-between">
                    <div>
                        <div className="flex gap-2 items-center">
                            <h3 className="">
                                Best Rated Airdrops
                            </h3>
                            <i className='bx bx-gift bx-tada text-xl'></i>
                        </div>

                        <p className="text-sm text-zinc-400">Latest airdrops added to Coinverse</p>
                    </div>
                    <i onClick={() => setIsOpen(false)} className='bx bx-x text-5xl' ></i>
                </div>

                <section className="mt-5 flex flex-col">
                    {isLoading ?
                        new Array(6).fill().map((a, i) =>
                            <div className='px-5 py-3' key={i}>
                                <Skeleton className={'h-[3.5rem]'} />
                            </div>) :
                        coins.map((a, i) =>
                            <a href={a.url_airdrop} target='_blank ' key={i} className="border py-3  border-zinc-700 hover:bg-zinc-700 px-5">
                                <div className="flex gap-2 w-full items-center mb-2">
                                    <div className="w-12">
                                        <img src={a.thumbnail} alt="" />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-between items-center">
                                            <h3>{a.token}</h3>
                                            <div className="flex items-center gap-2">
                                                <i className="fi fi-rr-social-network mt-[1px] text-xs"></i>
                                                <div className="flex items-center bg-red-500 w-[7.5rem] h-2 rounded">
                                                    <div className="bg-green-500 h-full rounded rounded-r-none" style={{ width: a.like_ratio + '%' }}></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex justify-between text-xs text-zinc-400">
                                            <h4 className="text-xs text-zinc-400 w-1/2">{a.name}</h4>
                                            <h5 className="text-sm whitespace-nowrap">Ends in <span className={`${a.days_left < 10 && 'text-red-500'}`}>{a.days_left}</span> days</h5>
                                        </div>
                                    </div>
                                </div>
                            </a>)}
                </section>
            </motion.dialog >

        </>, document.getElementById('modal'))
    )
}