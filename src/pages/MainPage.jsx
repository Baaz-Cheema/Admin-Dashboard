import CoinChart from "../components/main-page/CoinChart"
import SearchBar from "../components/main-page/SearchBar"
import CoinListSummary from "../components/main-page/CoinListSummary"
export default function MainPage() {
    return (
        <section className="py-5 px-10 flex-1">
            <SearchBar />
            <h3 className='font-semibold mb-1 text-xl'>Main Page</h3>
            <p className='text-gray-400 mb-5'>Get a snapshot of the current market state.</p>
            <CoinChart />
            <CoinListSummary />
        </section>
    )
}