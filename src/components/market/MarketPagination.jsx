import { useState, useEffect } from "react"

export default function MarketPagination({pageNum,setPageNum}) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pageNum])
    return (
        <section className="flex justify-center my-10">
            <div className="flex gap-3">
                <button
                    disabled={pageNum === 1}
                    onClick={() => setPageNum(1)}
                    className={`rounded-full bg-amber-500 w-[3rem] h-[3rem] font-bold ${pageNum === 1 && 'opacity-65 disabled:cursor-not-allowed'}`}>
                    1</button>
                <button
                    disabled={pageNum === 2}
                    onClick={() => setPageNum(2)}
                    className={`rounded-full bg-amber-500 w-[3rem] h-[3rem] font-bold ${pageNum === 2 && 'opacity-65 disabled:cursor-not-allowed'}`}>
                    2</button>
                <button
                    disabled={pageNum === 3}
                    onClick={() => setPageNum(3)}
                    className={`rounded-full bg-amber-500 w-[3rem] h-[3rem] font-bold ${pageNum === 3 && 'opacity-65 disabled:cursor-not-allowed'}`}>
                    3</button>
                <button
                    disabled={pageNum === 4}
                    onClick={() => setPageNum(4)}
                    className={`rounded-full bg-amber-500 w-[3rem] h-[3rem] font-bold ${pageNum === 4 && 'opacity-65 disabled:cursor-not-allowed'}`}>
                    4</button>
                <button
                    disabled={pageNum === 5}
                    onClick={() => setPageNum(5)}
                    className={`rounded-full bg-amber-500 w-[3rem] h-[3rem] font-bold ${pageNum === 5 && 'opacity-65 disabled:cursor-not-allowed'}`}>
                    5</button>
            </div>
        </section>
    )
}