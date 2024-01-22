import CoinChart from "../components/main-page/CoinChart"
import SearchBar from "../components/main-page/SearchBar"
import CoinListSummary from "../components/main-page/CoinListSummary"
import ControlButtons from "../components/main-page/ControlButtons"
export default function MainPage() {
    return (
        <section className="py-5 px-10 flex-1 sm:px-3 md:mb-20 ">
            <SearchBar />
            <h3 className='font-semibold font-poppins mb-1 text-xl'>Overview</h3>
            <p className='text-gray-400 font-poppins mb-5'>Get a snapshot of the current market state.</p>
            <div className='py-3 flex-1 items-center gap-4 hidden md:flex'>
                <ControlButtons />
            </div>
            <CoinChart />
            <CoinListSummary />
        </section>
    )
}