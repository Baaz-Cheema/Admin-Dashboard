import SearchBar from "../components/main-page/SearchBar"
import CoinListSummary from "../components/main-page/CoinListSummary"

export default function Market() {
    return (

        <>
            <h3 className='font-semibold font-poppins mb-1 text-xl'>Markets Overview</h3>
            <p className='text-gray-400 font-poppins mb-5'>Get the latest trading data to make informed decisions.</p>
            <CoinListSummary />
        </>

    )
}