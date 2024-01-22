import { NavLink } from "react-router-dom"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ClickAwayListener } from "@mui/material"
export default function SearchBar() {
    const [open, setOpen] = useState(false)
    const [menu, setMenu] = useState(false)
    return (
        <main className="mb-10 font-poppins">
            <section className="flex  gap-7  md:hidden">
                <div className="flex items-center flex-1 gap-5 bg-zinc-800 border border-zinc-700 py-4 px-3 rounded">
                    <i className="fi fi-rr-search"></i>
                    <input className="bg-zinc-800 " type="text" placeholder="Search..." />
                </div>

                <div className="bg-amber-400 flex items-center text-amber-50 rounded">
                    <p className="px-5">Create new account</p>
                </div>
                <div className="border-amber-400 border-2 rounded flex items-center">
                    <i className='bx bxs-bell px-5'></i>
                </div>

            </section>
            <div className="flex-1 w-full hidden md:flex items-center justify-between py-3">
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
                                <motion.div key={'input'} style={{ transformOrigin: 'right' }} layout animate={{ scaleX: [0, 1], transformOrigin: 'right' }} exit={{ scaleX: 0, opacity: 0, transition: { duration: .2 } }} className="flex items-center max-w-[9rem] flex-1 py-2 gap-5 bg-zinc-800 border border-zinc-700  px-3 rounded">
                                    <i className="fi fi-rr-search"></i>
                                    <input className="bg-zinc-800 w-full focus:outline-none" type="text" placeholder="Search..." />
                                </motion.div>
                                :
                                <motion.i key={'icon'} initial={{ opacity: 0, x: -10 }} exit={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 10, y: 2 }} transition={{ duration: .1 }} onClick={() => setOpen(!open)} className="bx bx-search text-4xl " ></motion.i>}
                        </AnimatePresence>
                        <i onClick={() => setMenu(!menu)} className='bx bx-menu-alt-right text-5xl'></i>
                        {menu && <motion.div layout className="absolute top-20 bg-green-600 h-fit right-0 bottom-0 w-screen overflow-hidden" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'fit-content' }}>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                            <li>hello</li>
                        </motion.div>}
                    </div>
                </ClickAwayListener>
            </div >
        </main >
    )
}