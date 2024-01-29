import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { transformPrice } from "../../util/utilFunctions"
export default function SearchedItems({ val }) {
    const transformText = (str) => {
        return str.toLowerCase().replace(/\s+/g, '')
    }
    const coins = useSelector(state => state.coinList.coins)
    const filteredCoins = coins.filter((a) =>
        transformText(a.name).includes(transformText(val)) ||
            transformText(a.symbol).includes(transformText(val))
        )
    return (
      <>
            {val && filteredCoins.length === 0 &&
                <div className="top-0 left-[5rem] flex justify-center w-full flex-col h-full items-center pb-3">
                    <i className="fi fi-rr-search-alt text-[10rem] text-gray-400"></i>
                    <p className="pt-0 text-zinc-400">No results for &quot;{val}&quot;</p>
                </div>}
            {filteredCoins.map((a, i) =>
                <Link to={'/market/' + a.name} key={i} className="border-b mx-3 border-zinc-700 py-4 flex justify-between">
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
                        <h3>{transformPrice(a.current_price)}</h3>
                    </div>

                </Link>)}
        </>
    )
}