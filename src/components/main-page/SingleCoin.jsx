import { Line } from "react-chartjs-2";
import { dataIncrease, dataDecrease } from '../../util/fakeData.js'
import { colorisePriceChange } from "../../util/utilFunctions.jsx";
import { formatPriceToShortForm } from "../../util/utilFunctions.jsx";
import { Link } from "react-router-dom";
import { formatSmallPrices } from "../../util/utilFunctions.jsx";

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


export default function SingleCoin({ name, image, currentPrice, change24h, marketcap, volume, symbol, bgColor }) {
    const transformedPrice = currentPrice > 0.01 ? parseFloat(currentPrice.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2 }) : formatSmallPrices(currentPrice)
    return (
        <Link to={'/market/' + name} className={`w-full py-4 px-2  flex justify-between border-b border-zinc-700 ${bgColor} hover:bg-zinc-750 cursor-pointer`}>
            <div className="flex-[.2] flex items-center gap-4 pl-4 md:pl-1 md:gap-2 sm:flex-1">
                <div className="w-8">
                    <img src={image} alt="" />
                </div>
                <div>
                    <h6 className="uppercase font-semibold">{symbol}</h6>
                    <h6 className='text-gray-400  text-xs'>{name}</h6>
                </div>

            </div>

            <div className="flex gap-5 justify-end flex-[.3] items-center lg:flex-[.4] sm:flex-1  font-roboto">
                <div className="flex-[.7]  justify-end hidden md:block text-end">
                    <h6 className="flex-1">${transformedPrice}</h6>
                    <h6 className={`flex-1 text-xs justify-end flex items-center gap-1 ${change24h && change24h.toFixed(2) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {change24h && change24h.toFixed(2)}%</h6>
                </div>
                <h6 className="flex-1 md:hidden">${transformedPrice}</h6>
                <h6 className={`flex-1 md:hidden text-left flex items-center gap-2 ${change24h && change24h.toFixed(2) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {change24h && change24h.toFixed(2)}% {colorisePriceChange(change24h)}</h6>
            </div>
            <div className="flex-[.4] flex justify-center items-center gap-5 lg:flex-[.3] md:flex-[.2] sm:flex-1 font-roboto">
                <h6 className="flex-[.4] lg:hidden">${formatPriceToShortForm(volume)}</h6>
                <h6 className="flex-[.5] lg:hidden">${formatPriceToShortForm(marketcap)}</h6>
                <div className="flex-1 text-end hidden lg:block">
                    <h6 className="flex-[.4]">${formatPriceToShortForm(volume)}</h6>
                    <h6 className="text-xs">${formatPriceToShortForm(marketcap)} </h6>
                </div>
                <div className='flex-[.5] pr-5 max-w-[9rem] lg:hidden overflow-hidden max-h-[3rem] flex items-center'>
                    <Line width={'100%'} options={options} data={change24h && change24h.toFixed(2) > 0 ? dataIncrease : dataDecrease} ></Line>
                </div>
            </div>
        </Link >
    )
}