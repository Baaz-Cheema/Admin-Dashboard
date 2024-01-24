import { Button } from '@mui/material';
import { coinList } from '../../util/coinList';

import SingleCoin from './SingleCoin';
import { Link } from 'react-router-dom';

export default function CoinListSummary() {
    return (
        <>
            {/* <h3 className='font-semibold mb-1 text-lg  md:pl-3'>Top Tokens by Market Capitalization</h3>
            <p className='text-gray-400 mb-5  md:pl-3'>Get a comprehensive snapshot of all crypto available on CoinSight.</p> */}
            <section className="flex flex-col border border-zinc-700 rounded-lg ">
                <div className="w-full py-4 px-2 flex justify-between border-b border-zinc-700 text-sm font-poppins text-zinc-400">
                    <h6 className="flex-[.2] pl-4 sm:flex-1">Name</h6>
                    <div className="flex justify-end gap-5 flex-[.3] lg:flex-[.4] sm:flex-1">
                        <h6 className="flex-[.7] md:text-end sm:text-center">Price</h6>
                        <h6 className="flex-[.8] md:hidden">24h change</h6>
                    </div>
                    <div className="flex-[.4] flex justify-center gap-5 lg:flex-[.3] md:flex-[.2] sm:flex-1">
                        <h6 className="flex-[.4] lg:hidden">Volume</h6>
                        <h6 className='flex-1 hidden lg:block text-end'>Cap/Vol</h6>
                        <h6 className="flex-[.5]  lg:hidden">Market Cap</h6>
                        <h6 className="flex-[.5] text-center lg:flex-1 lg:hidden">Trend</h6>
                    </div>
                </div>

                {coinList.map((coin, i) => <SingleCoin
                    key={coin.name}
                    bgColor={''}
                    name={coin.name}
                    image={coin.image}
                    currentPrice={coin.current_price}
                    change24h={coin.price_change_percentage_24h}
                    marketcap={coin.market_cap}
                    volume={coin.total_volume}
                    symbol={coin.symbol} />)}
            </section>
            <div className='text-center'>
                <Link to={'/market'} className='text-center'>
                    <button className='w-[10rem] bg-amber-500 py-3 mt-10'>Browse More</button>
                </Link>
            </div>
        </>
    )
}