import { formatPriceToLocale } from "../../util/utilFunctions"
import { colorisePriceChange } from "../../util/utilFunctions"
import { Link } from "react-router-dom"
import Skeleton from "../UI/Skeleton"
import { useSelector } from "react-redux"

export default function OtherCoins({ symbol, isLoading }) {
    const coinList= useSelector(state=>state.coinList.coins)
    const index = coinList.findIndex(a => a.symbol === symbol)
    const otherCoins = coinList.slice(index + 1, index + 4)
    return (
        <div className="flex-1 lg:w-full">
            <h3 className='font-semibold font-poppins mb-1 text-xl'>Other Coins</h3>
            <p className='text-gray-400 font-poppins mb-5'>Browse other projects</p>
            <div className="flex border border-zinc-700 py-4 items-center lg:flex-col lg:px-5 lg:gap-5">
                {!isLoading ? otherCoins?.map((a, i) => 
                    <Link key={a.name}
                        to={'/market/' + a.name}
                        className={`flex flex-col items-center flex-1 border-r border-zinc-700 lg:border-r-0 lg:border-b lg:flex-row lg:w-full lg:justify-between lg:pb-4 ${i === 2 && 'lg:pb-[0px] lg:border-b-0'}`}>
                        <div className="flex flex-col items-center lg:gap-2 lg:flex-row">
                            <div className="w-16 mb-1 lg:mb-0 lg:w-14 md:w-10">
                                <img src={a.image} alt="" />
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <h3 className='font-semibold font-poppins text-2xl text-ellipsis md:text-xl uppercase'>{a.symbol}</h3>
                                <h6 className='text-gray-400 text-md mb-3 lg:mb-0 md:text-sm'>{a.name}</h6>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:items-end">
                            <h3 className="text-2xl font-semibold md:text-xl" >${formatPriceToLocale(a.current_price)}</h3>
                            <h6 className={`${a.price_change_percentage_24h.toFixed(2) > 0 ? 'text-green-500' : 'text-red-500'} font-semibold md:text-sm`}> {a.price_change_percentage_24h.toFixed(2)}% {colorisePriceChange(a.price_change_percentage_24h)}</h6>
                        </div>
                    </Link>)
                 : new Array(3).fill().map((a,i) =>
                        <div key={i} className="w-full h-full px-5 flex flex-col items-center">
                            <Skeleton className={'w-[100%] h-12 mb-3 '} />
                            <Skeleton className={'w-[10rem] h-12 mb-3 lg:hidden'} />
                            <Skeleton className={'w-[10rem] h-12 lg:hidden'} />
                        </div>)}
                
            </div>
        </div>
    )
}