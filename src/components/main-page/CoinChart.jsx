import { getTime } from '../../util/utilFunctions';

import FearGreedIndex from './FearGreedIndex';
import 'chart.js/auto'; // Added this to fix blank chart issue
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Line } from 'react-chartjs-2';
import ControlButtons from './ControlButtons';


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
    const [coinData, setCoindata] = useState(null)
    const [dataType, setDataType] = useState('prices')
    const [duration, setDuration] = useState('hourly')//make a custom hook that gives data accoding to need of component aka need weekly daily or monthly



    function changeDataType(val) {
        if (val === 'prices') {
            setDataType('prices')
        } else if (val === 'total_volumes') {
            setDataType('total_volumes')
        }
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            if (duration === 'hourly') {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&precision=18')
                setCoindata(response.data)
            } else if(duration==='daily') {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily&precision=18')
                setCoindata(response.data)
            }
            setLoading(false)
        }
        fetchData()
    }, [duration])


    const labels = coinData && coinData[dataType].map((a) => getTime(a[0], duration))

    const chartdata = {
        labels,
        datasets: [
            {
                label: 'crypto chart',
                data: coinData && coinData[dataType].map((a) => a[1]),
                borderColor: 'rgb(251 ,191 ,36)',
                backgroundColor: 'rgb(251 ,191 ,36)',
                pointRadius: 0
            },
        ]
    }
    return (
        <>
            <div className='py-3 flex-1 items-center gap-4 hidden md:flex'>
                <ControlButtons />
            </div>

            <main className='flex gap-10 mb-10 lg:flex-col'>
                {
                    <section className='border border-zinc-700 w-[70%] lg:w-full font-poppins flex-[.7] lg:max-h-none rounded-lg relative'>
                        <div className='flex items-center justify-between px-8 md:px-3'>
                            <div className='flex items-center gap-3 flex-1'>
                                <div className='w-10 md:py-5'>
                                    <img className='w-full h-full object-cover' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="" />
                                </div>
                                <h3 className='font-poppins font-bold'>Bitcoin</h3>
                            </div>
                            <div className='py-3 flex flex-1 items-center gap-4 md:hidden'>
                                <ControlButtons changeDataType={changeDataType} setDuration={setDuration} duration={duration} dataType={dataType}/>
                            </div>
                        </div>
                        {loading ?
                            <div className='w-full h-[28rem] lg:h-[40rem] flex justify-center items-center pb-10 md:h-[35rem]'>
                                <i className='bx bx-loader-alt bx-spin text-6xl text-amber-500 ' ></i>
                            </div>
                            :
                            <div className='h-[28rem] pb-2 px-10 lg:w-full md:px-0 md:pb-2 lg:h-[40rem] md:h-[35rem]' >
                                <Line options={options} data={chartdata}></Line>
                            </div>}
                    </section>}

                <FearGreedIndex />
            </main>
        </>
    )
}