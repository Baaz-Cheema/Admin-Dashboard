import { getTime } from '../../util/utilFunctions';
import FearGreedIndex from './FearGreedIndex';
import 'chart.js/auto'; // Added this to fix blank chart issue
import { Line } from 'react-chartjs-2';
import ControlButtons from './ControlButtons';
import useCoinDataFetcher from '../hooks/coinDataFetcher';



const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
    },
    interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
    }
};

export default function CoinChart() {
    const {
        loading,
        coinData,
        dataType,
        duration,
        setDuration,
        changeDataType
    } = useCoinDataFetcher('bitcoin')

    const chartdata = {
        labels: coinData && coinData[dataType].map((a) => getTime(a[0], duration)),
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
                <ControlButtons changeDataType={changeDataType} setDuration={setDuration} duration={duration} dataType={dataType} />
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
                                <ControlButtons changeDataType={changeDataType} setDuration={setDuration} duration={duration} dataType={dataType} />
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