import { formatSmallPrices } from "../../util/utilFunctions";
export default function TransactionItem({ a }) {
    const transformedPrice = (currentPrice) => {
        return currentPrice < 0.001 ? parseFloat(currentPrice.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2 }) : formatSmallPrices(currentPrice)
    }
    return (
        <div className="border-b border-zinc-700 py-4 flex justify-between">
            <div className="flex gap-3 items-center">
                <div>
                    <h3 className="uppercase">{a.symbol}</h3>
                    <h4 className="text-sm text-green-600">BUY</h4>
                    <h4 className="text-sm text-zinc-400">Filled <span className="uppercase">({a.symbol})</span> </h4>
                    <h4 className="text-sm text-zinc-400">Fee <span className="uppercase">({a.symbol})</span></h4>
                    <h4 className="text-sm text-zinc-400">Total (USDT)</h4>
                </div>

            </div>
            <div className="text-right">
                <h3 className="text-sm text-zinc-400">{a.date}</h3>
                <h4 className="text-sm text-zinc-400">{transformedPrice(a.amount)}</h4>
                <h4 className="text-sm text-zinc-400">{a.filled?.toFixed(2)} USDT</h4>
                <h4 className="text-sm text-zinc-400">{a.fee}</h4>
                <h4 className="text-sm text-zinc-400">{a.filled?.toFixed(2)}</h4>
            </div>
        </div>
    )
}