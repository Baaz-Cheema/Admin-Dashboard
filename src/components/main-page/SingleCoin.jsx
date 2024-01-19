import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const dataIncrease = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2410 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2420 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2430 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2440 },
    { name: 'Page F', uv: 2390, pv: 1600, amt: 2450 },
    { name: 'Page G', uv: 3490, pv: 8300, amt: 2460 },
];
const dataDecrease = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2460 },
    { name: 'Page B', uv: 3000, pv: 2398, amt: 2450 },
    { name: 'Page C', uv: 2000, pv: 5800, amt: 2440 },
    { name: 'Page D', uv: 2780, pv: 1908, amt: 2430 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2420 },
    { name: 'Page F', uv: 2390, pv: 5800, amt: 2410 },
    { name: 'Page G', uv: 3490, pv: 1300, amt: 2400 },
];

function convert(num) {

}

function trendSymbol(val) {
    if (val === 0) {
        return <i className='bx bxs-down-arrow text-' ></i>
    }
    if (val > 0) {
        return <i className='bx bxs-up-arrow text-xs text-green-500' ></i>
    } else {
        return <i className='bx bxs-down-arrow text-xs text-red-500' ></i>
    }
}


export default function SingleCoin({ name, image, currentPrice, change24h, marketcap, volume, symbol, bg }) {
    return (
        <div className={`w-full py-4 px-2 flex justify-between border-b border-zinc-700 ${bg}`}>
            <div className="flex-[.2] flex items-center gap-4 pl-4">
                <div className="w-8">
                    <img src={image} alt="" />
                </div>
                <div>
                    <h6>{name}</h6>
                    <h6 className='text-gray-400 uppercase text-xs'>{symbol}</h6>
                </div>

            </div>

            <div className="flex gap-5 flex-[.3] items-center">
                <h6 className="flex-1">${currentPrice && currentPrice.toFixed(2)}</h6>
                <h6 className={`flex-1 text-left flex items-center gap-2 ${change24h && change24h.toFixed(2) > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {change24h && change24h.toFixed(2)}% {trendSymbol(change24h)}</h6>
            </div>
            <div className="flex-[.4] flex justify-center items-center gap-5">
                <h6 className="flex-[.3]">${volume}</h6>
                <h6 className="flex-[.3]">${marketcap}</h6>
                <div className='flex-[.2] w-full h-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={change24h && change24h.toFixed(2) > 0 ? dataIncrease : dataDecrease}>
                            <Line dot={false} dataKey="pv" stroke={change24h && change24h.toFixed(2) > 0 ? '#22c55e' : '#ef4444'} strokeWidth={1} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}