import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import SearchBar from "../components/main-page/SearchBar"


export default function Root() {
    return <div className="bg-zinc-800 text-zinc-100 flex relative">

        <Navbar />
        <section className="py-5 px-10 flex-1 sm:px-3 md:mb-20 ">
            <SearchBar />
            <Outlet />
        </section>
    </div>
}