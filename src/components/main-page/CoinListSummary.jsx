import { Button } from '@mui/material';

import { coinList } from '../../util/coinList';
import SingleCoin from './SingleCoin';
import { Link } from 'react-router-dom';

export default function CoinListSummary({ clickCount, handleClick, coins }) {
    const getSortedArray = () => {
        const coinListCopy = coins ? [...coins] : []
        switch (clickCount) {
            case 0: return coinListCopy;
            case 1: return coinListCopy.sort((a, b) => a.current_price - b.current_price);
            case 2: return coinListCopy.sort((a, b) => b.current_price - a.current_price);
        }
    };
    return (
        <>
            {/* <h3 className='font-semibold mb-1 text-lg  md:pl-3'>Top Tokens by Market Capitalization</h3>
            <p className='text-gray-400 mb-5  md:pl-3'>Get a comprehensive snapshot of all crypto available on CoinSight.</p> */}
            <section className="flex flex-col border border-zinc-700 rounded-lg ">
                <div className="w-full py-4 px-2 flex justify-between border-b border-zinc-700 text-sm font-poppins text-zinc-400">
                    <h6 className="flex-[.2] pl-4 sm:flex-1 sm:pl-2">Name</h6>
                    <div className="flex justify-end gap-5 flex-[.3] lg:flex-[.4] sm:flex-1">
                        <div onClick={handleClick} className='flex-[.7] md:justify-end flex items-center gap-1 cursor-pointer'>
                            <h6 className="">Price<span className='hidden md:block'>/Change</span></h6>
                            <div className='flex flex-col text-[8px]'>
                                <i className={`bx bxs-up-arrow ${clickCount === 1 && 'text-amber-500'}`} ></i>
                                <i className={`bx bxs-down-arrow ${clickCount === 2 && 'text-amber-500'}`} ></i>
                            </div>
                        </div>
                        <div className='flex-[.8] md:hidden flex items-center gap-1'>
                            <h6 className="">24h change</h6>
                        </div>
                    </div>
                    <div className="flex-[.4] flex justify-center gap-5 lg:flex-[.3] md:flex-[.2] sm:flex-1">
                        <h6 className="flex-[.4] lg:hidden">Volume</h6>
                        <h6 className='flex-1 hidden lg:block text-end'>Cap/Vol</h6>
                        <h6 className="flex-[.5]  lg:hidden">Market Cap</h6>
                        <h6 className="flex-[.5] text-center lg:flex-1 lg:hidden">Trend</h6>
                    </div>
                </div>

                {getSortedArray().map((coin, i) => <SingleCoin
                    key={coin.image}
                    bgColor={''}
                    name={coin.name}
                    image={coin.image}
                    currentPrice={coin.current_price}
                    change24h={coin.price_change_percentage_24h}
                    marketcap={coin.market_cap}
                    volume={coin.total_volume}
                    symbol={coin.symbol} />)}
            </section>
        </>
    )
}