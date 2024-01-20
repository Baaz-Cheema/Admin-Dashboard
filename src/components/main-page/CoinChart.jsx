import { getTime } from '../../util/getTime';
import { data } from '../../util/data';
import FearGreedIndex from './FearGreedIndex';
import 'chart.js/auto'; // ADD THIS

import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


console.log(data.prices.length)
const hello = data.prices.map((a, i) => (
    { time: getTime(a[0]), price: a[1] }
))


const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const time = payload[0].payload.time;
        const price = payload[0].payload.price;
        return (
            <div className="bg-zinc-500 opacity-75 p-3">
                <p className="label">{`Price : ${price.toFixed(2)}`}</p>
                <p className="intro">{`Time : ${time}`}</p>
            </div>
        );
    }
    return null;
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
    },
};

export default function CoinChart() {
    const [loading, setLoading] = useState(true)
    const labels = data && data.prices.map((a) => getTime(a[0]))
    const chartdata = {
        labels,
        datasets: [
            {
                label: 'crypto chart',
                data: data && data.prices.map((a) => a[1]),
                borderColor: 'rgb(251 ,191 ,36)',
                backgroundColor: 'rgb(251 ,191 ,36)',

            },]
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <main className='flex gap-5 mb-10 lg:flex-col'>
            {
                <section className='border border-zinc-700 w-[70%] lg:w-full font-poppins flex-[.7] lg:max-h-none rounded-lg relative'>
                    <div className='flex items-center justify-between px-8 md:px-3'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 md:py-5'>
                                <img className='w-full h-full object-cover' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="" />
                            </div>
                            <h3 className='font-poppins font-bold'>Bitcoin</h3>
                        </div>
                        <div className='py-3 flex items-center gap-4 md:hidden'>
                            <div className='px-5 w-[12rem] py-3 border border-zinc-700 flex items-center justify-between cursor-pointer'>
                                <button >Data Type</button>
                                <i className='bx bx-chevron-down' ></i>
                            </div>
                            <div className='px-5 py-3 w-[12rem] border border-zinc-700 flex items-center  justify-between'>
                                <button>Weekly</button>
                                <i className='bx bx-chevron-down' ></i>
                            </div>
                        </div>
                    </div>
                    {loading ?
                        <div className='w-full h-[28rem] lg:h-[40rem] flex justify-center items-center pb-10 md:h-[35rem]'>
                            <i className='bx bx-loader-alt bx-spin text-6xl text-blue-500 ' ></i>
                        </div> :
                        hello ?
                            <div className='h-[28rem] pb-2 px-10 lg:w-full md:px-0 md:pb-2 lg:h-[40rem] md:h-[35rem]' >
                                <Line options={options} data={chartdata}></Line>
                            </div> : 'dasas'}
                </section>}

            <FearGreedIndex />
        </main>
    )
}