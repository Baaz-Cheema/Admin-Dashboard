import { coinList } from '../../util/coinList';

import SingleCoin from './SingleCoin';


export default function CoinListSummary() {
    return (
        <>
            <h3 className='font-semibold mb-1 text-lg'>Top Tokens by Market Capitalization</h3>
            <p className='text-gray-400 mb-5'>Get a comprehensive snapshot of all cryptocurrencies available on CoinSight.</p>
            <section className="flex flex-col border border-zinc-700 rounded-lg ">
                <div className="w-full py-4 px-2 flex justify-between border-b border-zinc-700 text-sm font-poppins text-zinc-400">
                    <h6 className="flex-[.2] pl-4 sm:flex-1">Name</h6>
                    <div className="flex gap-5 flex-[.3] lg:flex-[.4] sm:flex-1">
                        <h6 className="flex-1">Price</h6>
                        <h6 className="flex-1 md:hidden">24h change</h6>
                    </div>
                    <div className="flex-[.4] flex justify-center gap-5 lg:flex-[.3] md:flex-[.2] sm:flex-1">
                        <h6 className="flex-[1]">Volume</h6>
                        <h6 className="flex-[1]  lg:hidden">Market Cap</h6>
                        <h6 className="flex-[1] lg:flex-1 lg:hidden">Trend</h6>
                    </div>
                </div>

                {coinList.map((coin, i) => <SingleCoin
                    key={coin.name}
                    bg={i % 2 === 0 && 'bg-zinc-750'}
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