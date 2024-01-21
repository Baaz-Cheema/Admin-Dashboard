import { NavLink } from "react-router-dom"
export default function SearchBar() {
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
            <div className="flex-1 w-full hidden md:flex items-center justify-between ">
                <NavLink className="flex items-center gap-2">
                    <div className="w-9">
                        <img src="https://altcoinsbox.com/wp-content/uploads/2023/01/nexa-logo.png" alt="" />
                    </div>
                    <div>
                        <p className="text-[.8rem]">COINSIGHT</p>
                        <p className="text-zinc-400 text-[.5rem]">Visionary Trading</p>
                    </div>

                </NavLink>
                <div className="text-3xl flex gap-8 items-center">
                    <i className="fi fi-rr-search text-2xl"></i>
                    <i className="fi fi-rr-menu-burger"></i>
                </div>
            </div>
        </main>
    )
}