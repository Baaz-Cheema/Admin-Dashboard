import { Link } from "react-router-dom"
import { formatSmallPrices } from "../../util/utilFunctions"
export default function Accumulation({ coinData }) {
    const transformedPrice = (currentPrice) => {
        return currentPrice < 0.001 ? parseFloat(currentPrice.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2 }) : formatSmallPrices(currentPrice)
    }
    return (
        <section className="border border-zinc-700 font-poppins rounded-lg mx-auto mb-28 xs:mb-10" >
            {coinData.map((a, i) => <Link to={'/market/' + a.name} key={i} className="border-b px-3 border-zinc-700 py-4 flex justify-between">

                <div className="flex gap-3 items-center">
                    <div className="w-10">
                        <img src={a.image} alt="" />
                    </div>
                    <div>
                        <h3 className="uppercase">{a.symbol}</h3>
                        <h4 className="text-sm text-zinc-400">{a.name}</h4>
                    </div>

                </div>
                <div className="text-right">
                    <h3>{transformedPrice(a.amount)}</h3>
                    <h4 className="text-sm text-zinc-400">{a.filled.toFixed(2)} USDT</h4>
                </div>

            </Link>)}

        </section>
    )
}