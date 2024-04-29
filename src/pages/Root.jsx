import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import axios from "axios"
import { coinListActions } from "../store/coinListSlice"
import { useState } from "react"
import SearchBar from "../components/main-page/SearchBar"
import ErrorMessage from "../components/UI/ErrorMessage"
export default function Root() {
    const location = useLocation()
    const dispatch = useDispatch()
    const [error, setError] = useState(false)


    useEffect(() => {
        async function fetchData() {
            try {
                const trendingCoins = await axios.get('https://api.coingecko.com/api/v3/search/trending')
                const allCoins = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&precision=full')
                const newCoins = trendingCoins.data.coins.slice(0, 8).map((a) => (
                    {
                        id: a.item.id,
                        name: a.item.name,
                        symbol: a.item.symbol,
                        image: a.item.large,
                        current_price: a.item.data.price, //seems like price is in number now, instead of being a str. 
                        price_change_percentage_24h: a.item.data.price_change_percentage_24h.usd,
                        total_volume: parseFloat(a.item.data.total_volume.replace(/[$,]/g, '')),
                        market_cap: parseFloat(a.item.data.market_cap.replace(/[$,]/g, '')),
                    }
                ))
                const newArr = newCoins.concat(allCoins.data)
                dispatch(coinListActions.setLoading(false))
                dispatch(coinListActions.setCoins(newArr))
            } catch (error) {
                console.log(error)
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 5000)
            }
        }
        fetchData()
    }, [])
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' })
    }, [location.pathname])

    return <div className="bg-zinc-800 text-zinc-100 flex relative">
        <ErrorMessage error={error} message={<><span>API request limit reached,</span><br /><span>try again in 2-3 minutes.</span></>} />
        <Navbar />
        <section className="py-5 px-10 flex-1 sm:px-3 md:mb-10 ">
            <SearchBar />
            <Outlet />
        </section>
    </div >
}