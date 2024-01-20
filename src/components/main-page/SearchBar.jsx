
export default function SearchBar() {
    return (
        <section className="flex font-poppins gap-7 mb-10 md:hidden">
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
    )
}