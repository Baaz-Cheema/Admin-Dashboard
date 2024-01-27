import { useSelector } from "react-redux"
import { useState } from "react"
import { motion } from "framer-motion"
import Transactions from "./Transactions"
import Accumulation from "./Accumulation"
export default function PortfolioData() {
    const coinData = useSelector(state => state.portfolio.coins)
    const [mode, setMode] = useState(0)
    return (
        <>
            <div className="font-poppins flex gap-5">
                <motion.div className="flex justify-around max-w-[80rem] mx-auto mb-10">
                    <div className="flex border border-zinc-700 rounded-lg font-xl uppercase text-black relative">
                        <motion.div layout transition={{
                            layout: { duration: 0.2 }
                        }}
                            className={`bg-amber-500  border-amber-500 rounded py-3 w-[9rem] absolute top-0 bottom-0`} style={{ right: mode ? 0 : null }}></motion.div>
                        <div onClick={() => setMode(0)} className={`py-3 w-[9rem] text-center z-[1] cursor-pointer text-white`}>Portfolio</div>
                        <div onClick={() => setMode(1)} className={`py-3 w-[9rem] text-center z-[1] cursor-pointer text-white`}>Transactions</div>
                    </div>
                </motion.div>
            </div>
            
                {mode ?
                    <Transactions /> :
                    <Accumulation coinData={coinData} />
                }
           
        </>
    )
}