import { Link, NavLink } from "react-router-dom"
import { motion } from "framer-motion"

export default function Navbar() {

    function activeLink(isActive) {
        return `flex flex-col items-center py-3 px-3 md:px-0
        ${isActive ? 'border-amber-400 text-amber-400 border-r-4 md:px-0 rounded md:border-r-0 md:border-t-4 ' : 'border-r-4 border-transparent md:border-r-0 md:border-t-4 '}`
    }

    return (
        <section className="bg-zinc-900 flex md:fixed md:bottom-0 md:w-full z-20">
            <nav className="font-poppins text-xs flex flex-col gap-10 pt-5 md:pt-0 box-border sticky h-fit top-5 md:flex-row md:w-full md:justify-between md:gap-0  md:px-7 md:static" >
                <NavLink className="flex items-center flex-col gap-2 md:hidden">
                    <div className="w-9">
                        <img src="https://altcoinsbox.com/wp-content/uploads/2023/01/nexa-logo.png" alt="" />
                    </div>
                    <div>
                        <p className="text-[.8rem]">COINSIGHT</p>
                        <p className="text-zinc-400 text-[.5rem]">Visionary Trading</p>
                    </div>

                </NavLink>

                <NavLink to={'/'} className={({ isActive }) => activeLink(isActive)}>
                    <i className="fi fi-rr-overview text-3xl md:text-2xl"></i>
                    Overview
                </NavLink>

                <NavLink to={'/market'} className={({ isActive }) => activeLink(isActive)}>
                    <i className="fi fi-rr-stats text-3xl md:text-2xl"></i>
                    Market
                </NavLink>
                <NavLink to={'/news'} className={({ isActive }) => activeLink(isActive)}>
                    <i className="fi fi-rr-newspaper text-3xl md:text-2xl"></i>
                    News
                </NavLink>

                <NavLink to={'/portfolio'} className={({ isActive }) => activeLink(isActive)}>
                    <i className="fi fi-rr-user text-3xl md:text-2xl"></i>
                    Portfolio
                </NavLink>
            </nav>
        </section>
    )
}