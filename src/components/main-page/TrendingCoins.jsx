import CoinListSummary from "./CoinListSummary"
import { useSelector } from "react-redux"
import { useState } from "react"
export default function TrendingCoins() {
    const data = useSelector(state => state.coinList.coins).slice(0, 8)
    const [clickCount, setClickCount] = useState(0)
    function handleClick() {
        setClickCount(prev => {
            if (prev === 2) {
                return 0
            }
            return prev + 1
        })
    }

    return (
        <>
            <CoinListSummary 
            coins={data} 
            clickCount={clickCount}
            handleClick={handleClick}/>
        </>
    )
}