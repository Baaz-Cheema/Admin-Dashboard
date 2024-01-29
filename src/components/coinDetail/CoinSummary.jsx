import CoinData from "./Coindata";
import OtherCoins from "./OtherCoins";
import { formatPriceToLocale } from "../../util/utilFunctions";
import { useState } from "react";
import { colorisePriceChange } from "../../util/utilFunctions";
import Skeleton from "../UI/Skeleton";
import BuyModal from "./BuyModal";
import { AnimatePresence } from "framer-motion";
import { formatSmallPrices } from "../../util/utilFunctions";

export default function CoinSummary(props) {
    // const isLoading = useSelector(state => state.coinList.isLoading)
    const [isOpen, setIsOpen] = useState(false)
    const transformedPrice = props.price > 0.01 ? parseFloat(props.price.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2 }) : formatSmallPrices(props.price)
    return (
        <section className="font-poppins mb-14">
            <CoinData {...props} />
            <main className="flex gap-10 items-end lg:flex-col lg:items-center">
                <div className="flex-[.7] md:self-start md:w-full">
                    <div className="flex gap-4 md:gap-2">
                        {props.isLoading ?
                            <div className="md:hidden">
                                <Skeleton className={'w-[10rem] h-8 mb-3 block '} />
                                <Skeleton className={'w-[10rem] h-8 mb-3 block'} />
                                <Skeleton className={'w-[16rem] h-20 mb-3 block ml-16'} />
                                <Skeleton className={'w-[15rem] h-20  mb-3'} />
                            </div> :
                            <>
                                <div className="w-16">
                                    <img src={props.image} alt="" />
                                </div>
                                <div>
                                    <h3 className='font-semibold font-poppins uppercase text-3xl'>{props.symbol}</h3>
                                    <h6 className='text-gray-400 text-lg mb-5'>{props.name}</h6>

                                    <div className="flex gap-4 items-center font-semibold md:hidden">
                                        <h3 className="text-5xl sm:text-4xl">${transformedPrice}</h3>
                                        <h6 className={`text-green-500 ${props.priceChange.toFixed(2) > 0 ? 'text-green-500' : 'text-red-500'}`}>{props.priceChange.toFixed(2)}% {colorisePriceChange(props.priceChange)} </h6>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    {props.isLoading ? <div className="hidden md:block">
                        <Skeleton className={'w-[10rem] h-8 mb-3 block'} />
                        <Skeleton className={'w-[10rem] h-8 mb-3 block'} />
                        <Skeleton className={'w-[12rem] h-14 mb-3 block'} />
                    </div> :
                        <div className="gap-4 items-center font-semibold hidden md:flex md:justify-between">
                            <h3 className="text-5xl sm:text-4xl">${formatPriceToLocale(props.price)}</h3>
                            <h6 className={`text-green-500 ${props.priceChange.toFixed(2) > 0 ? 'text-green-500' : 'text-red-500'}`}>{props.priceChange.toFixed(2)}% {colorisePriceChange(props.priceChange)}</h6>
                        </div>}
                    {!props.isLoading && <div className="mt-10 mb-5">
                        <p className="mb-5">Tags</p>
                        <div className="flex gap-2 flex-wrap">
                            <p className="px-3 py-1 bg-zinc-750 rounded-3xl">Mineable</p>
                            <p className="px-3 py-1 bg-zinc-750 rounded-3xl">POW</p>
                            <p className="px-3 py-1 bg-zinc-750 rounded-3xl">Smart contract</p>
                        </div>
                    </div>}
                    {!props.isLoading && <div className="flex gap-3">
                        <button onClick={() => setIsOpen(true)} className="bg-amber-500 w-9/12 sm:w-full py-5 rounded-lg hover:bg-amber-400 hover:-translate-y-1 transition-all">Buy</button>
                    </div>}
                    <div>

                    </div>
                </div>
                <AnimatePresence>
                    {isOpen &&
                        <BuyModal
                            setIsOpen={setIsOpen}
                            symbol={props.symbol}
                            priceChange={props.priceChange}
                            stringPrice={transformedPrice}
                            name={props.name}
                            image={props.image} />
                    }
                </AnimatePresence>
                <OtherCoins symbol={props.symbol} isLoading={props.isLoading} />
            </main>
        </section>
    )
}