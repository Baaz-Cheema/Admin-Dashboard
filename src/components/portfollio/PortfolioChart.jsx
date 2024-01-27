import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

export default function PortfolioChart() {
    const coinData = useSelector(state => state.portfolio.coins)
    const total = coinData.reduce((p, c) => p + parseFloat(c.filled), 0).toFixed(2)
    const data = {
        labels: coinData.map((a) => '$' + a.name),
        datasets: [
            {
                data: coinData.map((a) => a.filled),
                backgroundColor: [
                    'rgb(254, 244, 205)',
                    'rgb(254, 237, 171)',
                    'rgb(253, 230, 138)',
                    'rgb(252, 223, 105)',
                    'rgb(252, 216, 71)',
                    'rgb(251, 209, 38)',
                    'rgb(251, 201, 4)'
                ]

            },

        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%',
        plugins: {
            legend: {
                display: false,

            },

        },
        elements: {
            arc: {
                borderColor: 'rgb(63, 63, 70)',
            }
        }

    };
    return (
        <section className="flex items-center justify-between border border-zinc-700 py-3 rounded-lg mb-5 md:flex-col">
            <div className="w-[25rem] h-[30rem] mx-auto md:w-[20rem] md:h-[25rem] relative flex justify-center items-center">
                <div className="absolute">
                    <p className="font-semibold text-5xl">
                        ${total}
                    </p>
                    <p className="text-center">Total Accumulation</p>
                </div>
                <Doughnut data={data} options={options} />
            </div>

            <div className="w-4/12 md:w-9/12 sm:w-full mx-auto overflow-auto px-5 scroll-none max-h-[24rem]">
                    {coinData.map((a) =>
                        <div key={a.symbol} className="mb-3 flex items-center justify-between">
                            <div>
                                <h3 className="uppercase ">{a.symbol}</h3>
                                <h3 className="text-xs">{a.name}</h3>
                            </div>
                            <p className="font-bold text-amber-400">
                                {((a.filled / total) * 100).toFixed(0)}%
                            </p>
                        </div>
                    )}
                
            </div>
        </section>
    )
}


