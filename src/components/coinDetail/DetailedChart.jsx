import { getTime } from "../../util/utilFunctions";
import { Line } from "react-chartjs-2";
import ControlButtons from "../main-page/ControlButtons";
import useCoinDataFetcher from "../hooks/coinDataFetcher";
import ErrorMessage from "../UI/ErrorMessage";
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

export default function DetailedChart({ coin, symbol, image, id }) {

    const {
        loading,
        coinData,
        dataType,
        duration,
        setDuration,
        changeDataType,
        error
    } = useCoinDataFetcher(id)

    const chartdata = {
        labels: coinData && coinData[dataType].map((a) => getTime(a[0], duration)),
        datasets: [
            {
                label: 'crypto chart',
                data: coinData && coinData[dataType].map((a) => a[1]),
                borderColor: 'rgb(251 ,191 ,36)',
                backgroundColor: 'rgb(251 ,191 ,36)',
                pointRadius: 0
            },]
    }
    return (
        <>
            <div className="hidden lg:flex lg:mb-3 lg:gap-4">
                <ControlButtons changeDataType={changeDataType} setDuration={setDuration} duration={duration} dataType={dataType} />
            </div>
            <ErrorMessage error={error} message={<><span>Failed to get Graph data,</span><br /><span>try again in 2-3 minutes.</span></>} />
            <section className="border border-zinc-700 py-4 px-4 lg:mb-10">
                <main className="flex justify-between w-full mb-5">
                    <div className="flex items-center gap-10">
                        <div className='flex items-center gap-3'>
                            <div className='w-10 md:py-5'>
                                <img className='w-full h-full object-cover' src={image} alt="" />
                            </div>
                            <div>
                                <h3 className='font-poppins font-bold uppercase'>{symbol && symbol}</h3>
                                <h6 className="text-xs text-zinc-400 mt-[-3px]">{coin && coin}</h6>
                            </div>
                        </div>
                        <div className="border border-zinc-700 p-2 flex gap-1 rounded-lg lg:hidden">
                            <button onClick={() => changeDataType('prices')} className={` w-[8rem] py-2 rounded-md ${dataType === 'prices' && 'bg-amber-500'}`}>Price</button>
                            <button onClick={() => changeDataType('total_volumes')} className={`w-[8rem] rounded-md py-2 ${dataType === 'total_volumes' && 'bg-amber-500'}`}>Volume</button>
                        </div>
                    </div>
                    <div className="border border-zinc-700 p-2 flex gap-1 rounded-lg lg:hidden">
                        <button onClick={() => setDuration('hourly')} className={`w-[6rem] py-2 rounded-md ${duration === 'hourly' && ' bg-amber-500'}`}>1H</button>
                        <button onClick={() => setDuration('daily')} className={`w-[6rem] py-2 rounded-md ${duration === 'daily' && ' bg-amber-500'}`}>1D</button>
                        <button onClick={() => setDuration('weekly')} className={`w-[6rem] py-2 rounded-md ${duration === 'weekly' && ' bg-amber-500'}`}>1W</button>
                    </div>
                </main>

                <main>
                    {loading ?
                        <div className='w-full h-[32rem] lg:h-[40rem] flex justify-center items-center pb-10 md:h-[35rem]'>
                            <i className='bx bx-loader-alt bx-spin text-6xl text-amber-500' ></i>
                        </div> :
                        <div className="overflow-auto scroll-none">
                            <div className='h-[32rem] pb-2 px-10 w-[200%] md:px-0 md:pb-2 lg:h-[40rem] md:h-[30rem]' >
                                <Line options={options} data={chartdata}></Line>
                            </div>
                        </div>}
                </main>
            </section>
        </>
    )
}