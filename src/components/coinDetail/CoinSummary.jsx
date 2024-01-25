import CoinChart from "../main-page/CoinChart";
import CoinData from "./Coindata";
import OtherCoins from "./OtherCoins";
import { formatPriceToLocale } from "../../util/utilFunctions";
import { useState, useEffect } from "react";
import { colorisePriceChange } from "../../util/utilFunctions";


export default function CoinSummary(props) {
    // const [coin, setCoin] = useState(null)
    useEffect(() => {

    }, [])
    return (
        <section className="font-poppins mb-14">
            <CoinData {...props} />
            <main className="flex gap-10 items-end lg:flex-col lg:items-center">
                <div className="flex-[.7] md:self-start md:w-full">
                    <div className="flex gap-4 md:gap-2">
                        <div className="w-16">
                            <img src={props.image} alt="" />
                        </div>
                        <div>
                            <h3 className='font-semibold font-poppins uppercase text-3xl'>{props.symbol}</h3>
                            <h6 className='text-gray-400 text-lg mb-5'>{props.name}</h6>
                            <div className="flex gap-4 items-center font-semibold md:hidden">
                                <h3 className="text-5xl sm:text-4xl">${formatPriceToLocale(props.price)}</h3>
                                <h6 className={`text-green-500 ${props.priceChange.toFixed(2) > 0 ? 'text-green-500' : 'text-red-500'}`}>{props.priceChange.toFixed(2)}% {colorisePriceChange(props.priceChange)} </h6>
                            </div>
                        </div>
                    </div>
                    <div className="gap-4 items-center font-semibold hidden md:flex md:justify-between">
                        <h3 className="text-5xl sm:text-4xl">${formatPriceToLocale(props.price)}</h3>
                        <h6 className={`text-green-500 ${props.priceChange.toFixed(2) > 0 ? 'text-green-500' : 'text-red-500'}`}>{props.priceChange.toFixed(2)}% {colorisePriceChange(props.priceChange)}</h6>
                    </div>
                    <div className="mt-10 mb-5">
                        <p className="mb-5">Tags</p>
                        <div className="flex gap-2 flex-wrap">
                            <p className="px-3 py-1 bg-zinc-750 rounded-3xl">Mineable</p>
                            <p className="px-3 py-1 bg-zinc-750 rounded-3xl">POW</p>
                            <p className="px-3 py-1 bg-zinc-750 rounded-3xl">Smart contract</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <OtherCoins name={props.name} />
            </main>
        </section>
    )
}