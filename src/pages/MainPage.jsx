import CoinChart from "../components/main-page/CoinChart"
import SearchBar from "../components/main-page/SearchBar"
import CoinListSummary from "../components/main-page/CoinListSummary"
export default function MainPage() {
    return (
        <section className="py-5 px-10 flex-1 sm:px-1 mb-20">
            <SearchBar />
            <h3 className='font-semibold mb-1 text-xl'>Main Page</h3>
            <p className='text-gray-400 mb-5'>Get a snapshot of the current market state.</p>
            <div className='py-3 flex items-center gap-4'>
                <div className='px-5 w-1/2 py-3 border border-zinc-700 flex items-center justify-between cursor-pointer'>
                    <button >Data Type</button>
                    <i className='bx bx-chevron-down' ></i>
                </div>
                <div className='px-5 py-3 w-1/2 border border-zinc-700 flex items-center  justify-between'>
                    <button>Weekly</button>
                    <i className='bx bx-chevron-down' ></i>
                </div>
            </div>
            <CoinChart />
            <CoinListSummary />
        </section>
    )
}