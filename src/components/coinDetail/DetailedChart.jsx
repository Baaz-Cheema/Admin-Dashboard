import { data } from "../../util/data";
import { getTime } from "../../util/utilFunctions";
import { Line } from "react-chartjs-2";
import ControlButtons from "../main-page/ControlButtons";

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

export default function DetailedChart() {
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
    return (
        <>
            <div className="hidden lg:flex lg:mb-3 lg:gap-4">
                <ControlButtons />
            </div>
            <section className="border border-zinc-700 py-4 px-4 ">

                <main className="flex justify-between w-full mb-5">
                    <div className="flex items-center gap-10">
                        <div className='flex items-center gap-3'>
                            <div className='w-10 md:py-5'>
                                <img className='w-full h-full object-cover' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="" />
                            </div>
                            <div>
                                <h3 className='font-poppins font-bold'>Bitcoin</h3>
                                <h6 className="text-xs text-zinc-400 mt-[-3px]">BTC</h6>
                            </div>


                        </div>
                        <div className="border border-zinc-700 p-2 flex gap-1 rounded-lg lg:hidden">
                            <button className="bg-amber-500 w-[8rem] py-2 rounded-md">Price</button>
                            <button className="w-[8rem] py-2">Market Cap</button>
                        </div>
                    </div>
                    <div className="border border-zinc-700 p-2 flex gap-1 rounded-lg lg:hidden">
                        <button className="bg-amber-500 w-[6rem] py-2 rounded-md">1D</button>
                        <button className="w-[6rem] py-2">1W</button>
                        <button className="w-[6rem] py-2">1M</button>
                    </div>
                </main>

                <main>
                    <div className='h-[32rem] pb-2 px-10 lg:w-full md:px-0 md:pb-2 lg:h-[40rem] md:h-[35rem]' >
                        <Line options={options} data={chartdata}></Line>
                    </div>
                </main>
            </section>
        </>
    )
}