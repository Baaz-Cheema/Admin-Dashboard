import { motion } from "framer-motion"
import { createPortal } from "react-dom"
import { useState, useEffect } from "react"
import Skeleton from "../UI/Skeleton"
import axios from "axios"
const data = [
    {
        "name": "GGtoro",
        "token": "GGTORO",
        "type": "airdrop",
        "thumbnail": "https://airdropking.s3.amazonaws.com/media/CACHE/images/logo/GGTORO-150x150/013a3528bf768f61a01cb40ae62333de.jpg",
        "thumbnail_big": "https://airdropking.s3.amazonaws.com/media/CACHE/images/logo/GGTORO-150x150/2dd5f39527d02b94c3614cc3d79401de.jpg",
        "about": "GGtoro is the world’s first gaming-focused exchange. Trade game-related crypto, game credits, and gaming stocks, and collaborate with top gaming investors and creators.",
        "value": "TBA",
        "token_amount": "",
        "token_type": "Miscellaneous",
        "url_airdrop": "https://airdropking.io/out/ggtoro",
        "url_king": "https://airdropking.io/airdrop/ggtoro",
        "like_ratio": 94,
        "required_tools": [
            "telegram",
            "twitter"
        ],
        "end_date": "2024-01-31T17:00:00Z",
        "days_left": 4
    },
    {
        "name": "Wixi Exchange",
        "token": "WIXI",
        "type": "airdrop",
        "thumbnail": "https://airdropking.s3.amazonaws.com/media/CACHE/images/logo/Wiki_Exchange/a63bd6b5c07461b3cb9801fa18c71dd6.jpeg",
        "thumbnail_big": "https://airdropking.s3.amazonaws.com/media/CACHE/images/logo/Wiki_Exchange/3ab997fa4172960d9ea63b971ae26b73.jpeg",
        "about": "Wixi Exchange is a gateway to the world of cryptocurrency opportunities. They passionately believe in the promise of digital assets and strive to make them accessible to everyone.",
        "value": "TBA",
        "token_amount": "",
        "token_type": "Own Blockchain",
        "url_airdrop": "https://airdropking.io/out/wixi",
        "url_king": "https://airdropking.io/airdrop/wixi",
        "like_ratio": 88,
        "required_tools": [
            "others"
        ],
        "end_date": "2024-01-31T21:00:00Z",
        "days_left": 4
    },
    {
        "name": "BRC App",
        "token": "BRCT",
        "type": "airdrop",
        "thumbnail": "https://airdropking.s3.amazonaws.com/media/CACHE/images/logo/BRC-App-150x150/5361ce3b07be831c157c95ff4ccccabf.jpg",
        "thumbnail_big": "https://airdropking.s3.amazonaws.com/media/CACHE/images/logo/BRC-App-150x150/0b223be6354b4b3a0b4e4adec4cd2506.jpg",
        "about": "BRC App is the App for BRC & Bitcoin Ecosystem.",
        "value": "TBA",
        "token_amount": "",
        "token_type": "Miscellaneous",
        "url_airdrop": "https://airdropking.io/out/brct",
        "url_king": "https://airdropking.io/airdrop/brct",
        "like_ratio": 87,
        "required_tools": [
            "others"
        ],
        "end_date": "2024-01-31T13:00:00Z",
        "days_left": 4
    },
    {
        "name": "Zircuit",
        "token": "N/A",
        "type": "competition",
        "thumbnail": "https://airdropking.s3.amazonaws.com/media/CACHE/images/logo/Zircuit-150x150/311a3c49f26ff855a647f97570bc4689.jpg",
        "thumbnail_big": "https://airdropking.s3.amazonaws.com/media/CACHE/images/logo/Zircuit-150x150/bc7f68be52f6515c0800014f5883573d.jpg",
        "about": "Zircuit is a fully EVM-compatible zero-knowledge rollup powering the limitless potential of web3.",
        "value": "TBA",
        "token_amount": "",
        "token_type": "ERC20",
        "url_airdrop": "https://airdropking.io/out/Zircuit",
        "url_king": "https://airdropking.io/airdrop/Zircuit",
        "like_ratio": 84,
        "required_tools": [
            "others"
        ],
        "end_date": "2024-02-20T15:00:00Z",
        "days_left": 24
    },
    {
        "name": "JLaunchpad x XFloki",
        "token": "XFLOKI",
        "type": "airdrop",
        "thumbnail": "https://airdropking.s3.amazonaws.com/media/CACHE/images/logo/JLaunchpad-150x150/7fe567f2021d27060251eb667831ff42.jpg",
        "thumbnail_big": "https://airdropking.s3.amazonaws.com/media/CACHE/images/logo/JLaunchpad-150x150/4abd549e966c8fd9433692745ac27f95.jpg",
        "about": "JLaunchpad is a easy platform to launch a crypto project. JLaunchpad offers a diverse range of services to meet the needs of your blockchain project.",
        "value": "TBA",
        "token_amount": "",
        "token_type": "Miscellaneous",
        "url_airdrop": "https://airdropking.io/out/xfloki",
        "url_king": "https://airdropking.io/airdrop/xfloki",
        "like_ratio": 84,
        "required_tools": [
            "others"
        ],
        "end_date": "2024-02-21T14:00:00Z",
        "days_left": 25
    },
    {
        "name": "KimberLite",
        "token": "USDT",
        "type": "airdrop",
        "thumbnail": "https://airdropking.s3.amazonaws.com/media/CACHE/images/logo/IMG_3838-150x150.jpeg/fca6d6d785e78a1271df796459b5a7b3.jpg",
        "thumbnail_big": "https://airdropking.s3.amazonaws.com/media/CACHE/images/logo/IMG_3838-150x150.jpeg/f8230bec1a61253ac861aa16227595ad.jpg",
        "about": "KimberLite is the world’s first diamond powered Web3 eceosystem, which has been built with one purpose in mind: Making diamonds accessible to all.",
        "value": "TBA",
        "token_amount": "",
        "token_type": "Miscellaneous",
        "url_airdrop": "https://airdropking.io/out/Kimber",
        "url_king": "https://airdropking.io/airdrop/Kimber",
        "like_ratio": 82,
        "required_tools": [
            "telegram",
            "twitter",
            "others"
        ],
        "end_date": "2024-02-01T10:00:00Z",
        "days_left": 5
    }
]

export default function AirdropModal({ setIsOpen }) {
    const [coins, setCoins] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://api.airdropking.io/airdrops/')
            setCoins(response.data)
            setLoading(false)
        }
        getData()
    }, [])
    return (
        createPortal(<>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                exit={{ opacity: 0 }}
                style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0, 0, 0, 0.70)' }}
                className='fixed z-40 top-0 bottom-0 right-0 left-0'
                onClick={() => setIsOpen(false)}
            />
            <motion.dialog
                open
                initial={{ scale: .9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: .9, opacity: 0 }}
                transition={{ type: "spring", duration: .5 }}
                className='bg-zinc-750 rounded-lg fixed top-0 bottom-0 z-50 flex flex-col text-white w-[30rem]  sm:w-[90%] overflow-hidden drop-shadow-2xl'>
                <div className="px-5 pt-5 font-poppins flex justify-between">
                    <div>
                        <h3 className="">
                            Best Rated Airdrops
                        </h3>
                        <p className="text-sm text-zinc-400">Latest airdrops added to Coinverse</p>
                    </div>
                    <i className='bx bx-gift bx-tada text-3xl'></i>
                </div>

                <section className="mt-5 flex flex-col">
                    {isLoading ?
                        new Array(6).fill().map((a, i) =>
                            <div className='px-5 py-3' key={i}>
                                <Skeleton className={'h-14'} />
                            </div>) :
                        coins.map((a, i) =>
                            <a href={a.url_airdrop} target='_blank ' key={i} className="border py-3  border-zinc-700 hover:bg-zinc-700 px-5">
                                <div className="flex gap-2 w-full items-center mb-2">
                                    <div className="w-12">
                                        <img src={a.thumbnail} alt="" />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex justify-between items-center">
                                            <h3>{a.token}</h3>
                                            <div className="flex items-center gap-2">
                                                <i className="fi fi-rr-social-network mt-1"></i>
                                                <div className="flex items-center bg-red-500 w-[7.5rem] h-2 rounded">
                                                    <div className="bg-green-500 h-full rounded rounded-r-none" style={{ width: a.like_ratio + '%' }}></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex justify-between text-xs text-zinc-400">
                                            <h4 className="text-xs text-zinc-400">{a.name}</h4>
                                            <h5 className="text-sm">Ends in <span className={`${a.days_left < 10 && 'text-red-500'}`}>{a.days_left}</span> days</h5>
                                        </div>
                                    </div>
                                </div>
                            </a>)}
                </section>
            </motion.dialog >

        </>, document.getElementById('modal'))
    )
}