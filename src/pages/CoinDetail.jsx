import CoinSummary from "../components/coinDetail/CoinSummary";
import DetailedChart from "../components/coinDetail/DetailedChart";
import { useParams } from "react-router-dom";
import { coinList } from "../util/coinList";
import { useSelector } from "react-redux";
export default function CoinDetail() {
    const data = useSelector(state => state.coinList.coins)
    const param = useParams()
    const coinName = param.coin
    const coin = data[data.findIndex((a) => a.name === coinName)]
    return <>
        <h3 className='font-semibold font-poppins mb-1 text-xl'>Coin summary</h3>
        <p className='text-gray-400 font-poppins mb-5'>Learn about projects and status</p>
        <CoinSummary
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
            volume={coin.total_volume}
            supply={coin.circulating_supply}
            low24h={coin.low_24h}
            high24h={coin.high_24h}
            image={coin.image}
        />
        <DetailedChart
            coin={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            id={coin.id}
        />
    </>
}