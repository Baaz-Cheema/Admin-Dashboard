import CoinChart from "../components/main-page/CoinChart"
import { Link } from "react-router-dom"
import TrendingCoins from "../components/main-page/TrendingCoins"
export default function MainPage() {
    return (
        <>
            <h3 className='font-semibold font-poppins mb-1 text-xl'>Overview</h3>
            <p className='text-gray-400 font-poppins mb-5'>Get a snapshot of the current market state.</p>
            <CoinChart />
            <h3 className='font-semibold mb-1 text-lg  md:pl-3'>Top 8 Trending Tokens by Market Capitalization</h3>
            <p className='text-gray-400 mb-5  md:pl-3'>Explore our curated list of the top 8 trending cryptocurrencies on CoinSight.</p>
            <TrendingCoins />
            <div className='text-center'>
                <Link to={'/market'} className='text-center'>
                    <button className='w-[10rem] bg-amber-500 py-4 my-10 font-poppins hover:bg-amber-400 rounded-md'>Browse More</button>
                </Link>
            </div>
        </>
    )
}