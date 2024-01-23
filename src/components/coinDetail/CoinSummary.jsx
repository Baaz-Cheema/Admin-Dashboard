import CoinChart from "../main-page/CoinChart";
import CoinData from "./Coindata";
import OtherCoins from "./OtherCoins";

export default function CoinSummary() {
    return (
        <section className="font-poppins mb-14">
            <CoinData />
            <main className="flex gap-10 items-end lg:flex-col lg:items-center">
                <div className="flex-[.7] md:self-start md:w-full">
                    <div className="flex gap-4 md:gap-2">
                        <div className="w-16">
                            <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="" />
                        </div>
                        <div>
                            <h3 className='font-semibold font-poppins  text-3xl'>Bitcoin</h3>
                            <h6 className='text-gray-400  text-lg mb-5'>BTC</h6>
                            <div className="flex gap-4 items-center font-semibold md:hidden">
                                <h3 className="text-5xl sm:text-4xl">$2,400.90</h3>
                                <h6 className="text-green-500"><i className='bx bxs-up-arrow  text-green-500 text-xs' ></i> 3.06%</h6>
                            </div>
                        </div>
                    </div>
                    <div className="gap-4 items-center font-semibold hidden md:flex md:justify-between">
                        <h3 className="text-5xl sm:text-4xl">$2,400.90</h3>
                        <h6 className="text-green-500"><i className='bx bxs-up-arrow  text-green-500 text-xs' ></i> 3.06%</h6>
                    </div>
                    <div className="mt-10 mb-5">
                        <p className="mb-5">Tags</p>
                        <div className="flex gap-2 flex-wrap">
                            <p className="px-3 py-1 bg-zinc-750 rounded-3xl">Mineable</p>
                            <p className="px-3 py-1 bg-zinc-750 rounded-3xl">POW</p>
                            <p className="px-3 py-1 bg-zinc-750 rounded-3xl">Smart contract</p>
                        </div>
                    </div>
                    <div className="flex gap-3 w-full">
                        <button className="bg-amber-500 text-amber-50 font-semibold flex-1 py-5 rounded-lg">Buy Coin</button>
                        <button className="text-amber-400 border border-amber-400 font-semibold flex-1 py-5 rounded-lg">Sell Coin</button>
                    </div>

                    <div>

                    </div>
                </div>
                <OtherCoins />
            </main>
        </section>
    )
}