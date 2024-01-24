import { coinList } from "../../util/coinList"
import { formatPriceToLocale } from "../../util/utilFunctions"
import { colorisePriceChange } from "../../util/utilFunctions"
import { Link } from "react-router-dom"

export default function OtherCoins({ name }) {
    const index = coinList.findIndex(a => a.name === name)
    const otherCoins = coinList.slice(index + 1, index + 4)
    console.log(otherCoins)
    return (
        <div className="flex-1 lg:w-full">
            <h3 className='font-semibold font-poppins mb-1 text-xl'>Other Coins</h3>
            <p className='text-gray-400 font-poppins mb-5'>Learn about projects and status</p>
            <div className="flex border border-zinc-700 py-4 items-center lg:flex-col lg:px-5 lg:gap-5">
                {otherCoins.map((a, i) =>
                    <Link key={a.name}
                        to={'/market/' + a.name}
                        className={`flex flex-col items-center flex-1 border-r border-zinc-700 lg:border-r-0 lg:border-b lg:flex-row lg:w-full lg:justify-between lg:pb-4 ${i === 2 && 'lg:pb-0 lg:border-b-0'}`}>
                        <div className="flex flex-col items-center lg:gap-2 lg:flex-row">
                            <div className="w-16 mb-1 lg:mb-0 lg:w-14 md:w-10">
                                <img src={a.image} alt="" />
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <h3 className='font-semibold font-poppins text-2xl text-ellipsis md:text-xl'>{a.name}</h3>
                                <h6 className='text-gray-400 text-md mb-3 lg:mb-0 md:text-sm uppercase'>{a.symbol}</h6>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:items-end">
                            <h3 className="text-2xl font-semibold md:text-xl" >${formatPriceToLocale(a.current_price)}</h3>
                            <h6 className={`${a.price_change_percentage_24h.toFixed(2) > 0 ? 'text-green-500' : 'text-red-500'} font-semibold md:text-sm`}> {a.price_change_percentage_24h.toFixed(2)}% {colorisePriceChange(a.price_change_percentage_24h)}</h6>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}