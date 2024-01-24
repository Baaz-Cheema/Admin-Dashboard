import CoinChart from "../components/main-page/CoinChart"
import SearchBar from "../components/main-page/SearchBar"
import CoinListSummary from "../components/main-page/CoinListSummary"
import ControlButtons from "../components/main-page/ControlButtons"
export default function MainPage() {
    return (
        <>
            <h3 className='font-semibold font-poppins mb-1 text-xl'>Overview</h3>
            <p className='text-gray-400 font-poppins mb-5'>Get a snapshot of the current market state.</p>
            <CoinChart />
            <CoinListSummary />
        </>
    )
}