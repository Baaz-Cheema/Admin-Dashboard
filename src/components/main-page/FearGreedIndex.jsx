import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useState } from 'react';



function convertTime(dateInMs) {
    if (isNaN(parseInt(dateInMs))) {
        return 'loading..'
    }
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(dateInMs * 1000) //To convert a Unix timestamp (which is in seconds) to a JavaScript Date object (which is in milliseconds)
    const day = date.getUTCDate()
    const month = date.getUTCMonth() + 1
    const year = date.getUTCFullYear()

    return `${day} ${months[month - 1]}, ${year}`
}


export default function FearGreedIndex() {
    const gauge = useRef(null)
    const [isLoading, setIsloading] = useState(true)
    const [data, setData] = useState({ value: 0, value_classification: 'Neutral', timestamp: 'loading..' })
    useEffect(() => {
        if (gauge.current) {
            gauge.current.style.transform = `rotate(${data.value / 100 / 2
                }turn)`
        }
    })
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://api.alternative.me/fng/')
            setData(response.data.data[0])
            setIsloading(false)
        }
        fetchData()
    }, [])

    return (
        <section className="font-poppins px-3 py-2 flex-[.3] border border-zinc-700 rounded-lg">
            <h3 className="font-bold mb-1">
                Fear greed indicator
            </h3>
            <h4 className=' text-zinc-400 mb-7 capitalize'>Multifactoral market sentiment analysis.</h4>
            <div className='flex justify-center px-5'>
                <div className="gauge">
                    <div className="gaugebody">
                        <div ref={gauge} className="gaugefill bg-blue-500"></div>
                        <div className="gaugecover bg-zinc-800 font-poppins font-bold text-zinc-50 flex flex-col">
                            {isLoading ? <i className='bx bx-loader-alt bx-spin' ></i> :
                                <>
                                    <p className='text-[2vw] lg:text-[4vw] sm:text-[6.5vw]'>{data?.value}</p>
                                    <p className='my-1 mb-3 text-center text-[1.5vw] lg:text-[3vw] sm:text-[4vw] font-normal '>Now: {data?.value_classification}</p>
                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-10 mb-3 text-zinc-400'>
                <a className='text-xs' href="">alternative.me</a>
                <p className='text-xs '>last updated: {convertTime(data.timestamp)}</p>
            </div>
            <p className='text-sm text-zinc-400'>Our Fear and Greed Index helps temper emotional reactions in the volatile crypto market, preventing FOMO during market surges.</p>

        </section>
    )
}