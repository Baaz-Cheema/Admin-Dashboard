import { Line } from "react-chartjs-2";
import { dataIncrease, dataDecrease } from '../../util/fakeData.js'
import { useState, useEffect } from "react";

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            ticks: {
                display: false,
            },
            grid: {
                display: false,
            },
            axis: {
                display: false,
            },
            dots: {
                display: false
            }
        },
        y: {
            ticks: {
                display: false,
            },
            grid: {
                display: false,
            },
            axis: {
                display: false,
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};



function trendSymbol(val) {
    if (val === 0) {
        return <i className='bx bxs-down-arrow' ></i>
    }
    if (val > 0) {
        return <i className='bx bxs-up-arrow text-xs text-green-500' ></i>
    } else {
        return <i className='bx bxs-down-arrow text-xs text-red-500' ></i>
    }
}


export default function SingleCoin({ name, image, currentPrice, change24h, marketcap, volume, symbol, bg }) {
    const [loading, setLoading] = useState(true)
    let formatter = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 });
    return (
        <div className={`w-full py-4 px-2  flex justify-between border-b border-zinc-700 ${bg} hover:bg-zinc-750 cursor-pointer`}>
            <div className="flex-[.2] flex items-center gap-4 pl-4 md:pl-1 md:gap-2 sm:flex-1">
                <div className="w-8">
                    <img src={image} alt="" />
                </div>
                <div>
                    <h6 className="uppercase font-semibold">{symbol}</h6>
                    <h6 className='text-gray-400  text-xs'>{name}</h6>
                </div>

            </div>

            <div className="flex gap-5 justify-end flex-[.3] items-center lg:flex-[.4] sm:flex-1 font-bold font-roboto">
                <div className="flex-[.7]  justify-end hidden md:block text-end">
                    <h6 className="flex-1">${currentPrice && currentPrice.toFixed(2)}</h6>
                    <h6 className={`flex-1 text-xs justify-end flex items-center  gap-1 ${change24h && change24h.toFixed(2) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {change24h && change24h.toFixed(2)}% {trendSymbol(change24h)}</h6>
                </div>
                <h6 className="flex-1 md:hidden">${currentPrice && currentPrice.toFixed(2)}</h6>
                <h6 className={`flex-1 md:hidden text-left flex items-center gap-2 ${change24h && change24h.toFixed(2) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {change24h && change24h.toFixed(2)}% {trendSymbol(change24h)}</h6>
            </div>
            <div className="flex-[.4] flex justify-center items-center gap-5 lg:flex-[.3] md:flex-[.2] sm:flex-1 font-roboto">
                <h6 className="flex-[.4] lg:hidden font-bold">${formatter.format(volume)}</h6>
                <h6 className="flex-[.5] lg:hidden font-bold">${formatter.format(marketcap)}</h6>
                <div className="flex-1 text-end hidden lg:block font-bold">
                    <h6 className="flex-[.4]">${formatter.format(volume)}</h6>
                    <h6 className="text-xs">${formatter.format(marketcap)} </h6>
                </div>
                <div className='flex-[.5] pr-5 max-w-[9rem] lg:hidden overflow-hidden max-h-[3rem] flex items-center'>
                    <Line width={'100%'} options={options} data={change24h && change24h.toFixed(2) > 0 ? dataIncrease : dataDecrease} ></Line>
                </div>
            </div>
        </div >
    )
}