import CoinListSummary from "../components/main-page/CoinListSummary"
import MarketPagination from "../components/market/MarketPagination"
import { useSelector } from "react-redux"
import { useState } from "react"
export default function Market() {
    const [pageNum, setPageNum] = useState(1)
    const [clickCount, setClickCount] = useState(0)
    const data = useSelector(state => state.coinList.coins).slice(8)
    const startIndex = (pageNum - 1) * 20
    const endIndex = startIndex + 20
    const coins = data.slice(startIndex, endIndex)
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
            <h3 className='font-semibold font-poppins mb-1 text-xl'>Markets Overview</h3>
            <p className='text-gray-400 font-poppins mb-5'>Get the latest trading data to make informed decisions.</p>
            <CoinListSummary
                coins={coins}
                handleClick={handleClick}
                clickCount={clickCount} />
            <MarketPagination
                pageNum={pageNum}
                setPageNum={setPageNum} />
        </>
    )
}