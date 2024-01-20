import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"


export default function Root() {
    return <div className="bg-zinc-800 text-zinc-100 flex relative">
        <Navbar />
        <Outlet />
    </div>
}