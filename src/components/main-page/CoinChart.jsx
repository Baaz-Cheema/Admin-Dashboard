import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { getTime } from '../../util/getTime';
import { data } from '../../util/data';
import FearGreedIndex from './FearGreedIndex';
const dataa = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];



export default function CoinChart() {
    return (
        <main className=' h-[30rem] flex gap-5 mb-20'>
            <section className='pb-12 border border-zinc-700 font-poppins flex-[.7]'>
                <div className='flex items-center justify-between px-8'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10'>
                            <img className='w-full h-full object-cover' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="" />
                        </div>
                        <h3 className='font-poppins font-bold'>Bitcoin</h3>
                    </div>
                    <div className='py-3 flex items-center gap-4'>
                        <div className='px-5 w-[12rem] py-3 border border-zinc-700 flex items-center justify-between'>
                            <button >Data Type</button>
                            <i className='bx bx-chevron-down' ></i>
                        </div>
                        <div className='px-5 py-3 w-[12rem] border border-zinc-700 flex items-center  justify-between'>
                            <button>Weekly</button>
                            <i className='bx bx-chevron-down' ></i>
                        </div>

                    </div>
                </div>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={dataa}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="darkgray" />
                        <XAxis dataKey="name" axisLine={false} />
                        <YAxis axisLine={false} />
                        <Tooltip />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 2 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </section>
            <FearGreedIndex />
        </main>
    )
}