import ArticleItem from "./ArticleItem"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { newsListActions } from "../../store/newsSlice"
import { useState } from "react"
import Skeleton from "../UI/Skeleton"

export default function Articles() {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const newsItems = useSelector(state => state.newsList.news)
    const pages = useSelector(state => state.newsList.pages)
    const currentIndex = useSelector(state => state.newsList.currentPageIndex)
    function handlePagination(queue) {
        if (queue === 'next') {
            dispatch(newsListActions.incrementIndex())
        } else {
            dispatch(newsListActions.decrementIndex())
        }
    }
    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true)
            const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_36970ec6e626be098fdca6955ea786e4e01c1&q=crypto,%20cryptocurrency&country=us&language=en${currentIndex ? `&page=${pages[currentIndex]}` : ''}`)
            dispatch(newsListActions.setNews(response.data.results))
            dispatch(newsListActions.setPreviousPages(response.data.nextPage))
            setIsLoading(false)
        }

        fetch()
    }, [dispatch, currentIndex])
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [currentIndex])
    return (
        <>
            <section className="grid grid-cols-3 gap-5 gap-y-8 lg:grid-cols-2 sm:grid-cols-1 mb-10">

                {!isLoading ? newsItems.map((a) =>
                    <ArticleItem
                        key={a.article_id}
                        data={a}
                    />
                ) : new Array(9).fill().map((a, i) => <Skeleton key={i} className={'w-[full] h-[45vh] xs:h-[30vh] bg-zinc-700'} />)}
            </section>
            <div className="flex gap-5 justify-center mb-10 font-poppins">
                <button disabled={currentIndex === 0} className="bg-amber-500 w-[10rem] py-3 rounded disabled:opacity-65 disabled:cursor-not-allowed" onClick={() => handlePagination('prev')}>Previous</button>
                <button disabled={pages[pages.length - 1] === null} className="bg-amber-500 w-[10rem] py-3 rounded disabled:opacity-65 disabled:cursor-not-allowed" onClick={() => handlePagination('next')}>Next</button>
            </div>
        </>
    )
}