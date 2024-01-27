import { createPortal } from "react-dom"
import { useState } from "react"
import { Slider } from "@mui/material"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { portfolioSliceActions } from "../../store/portfolioSlice"
import { Link } from "react-router-dom"
import TransactionItem from "../portfollio/TransactionItem"

export default function BuyModal({ setIsOpen, symbol, priceChange, stringPrice, name, image }) {
    const price = Number(stringPrice.replace(',', ''))
    const dispatch = useDispatch()
    const budget = useSelector(state => state.portfolio.budget)
    const [amount, setAmount] = useState(0)
    const [orderComplete, setOrderComplete] = useState(false)
    const fee = 0.0075
    function handleChange(e) {
        setAmount(e.target.value)
    }
    const transaction = {
        name,
        symbol,
        price,
        fee,
        filled: (budget / 100 * amount),
        get amount() {
            return (this.filled / price);
        },
        date: new Date().toString().split('GMT')[0]
    }

    function submit() {
        if (amount > 0 || budget === 0) {
            setOrderComplete(true)
            dispatch(portfolioSliceActions.addTransaction(
                transaction
            ))
            dispatch(portfolioSliceActions.addCoinToPortfolio(
                {
                    name,
                    symbol,
                    image,
                    filled: (budget / 100 * amount),
                    get amount() {
                        return (this.filled / price);
                    }
                }
            ))
            dispatch(portfolioSliceActions.subtractBudget((budget / 100 * amount)))
        }
    }

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
                className='bg-zinc-750 rounded-lg fixed top-0 bottom-0 z-50 flex flex-col items-center  text-white w-[30rem] h-[33rem]  sm:w-[90%] overflow-hidden drop-shadow-2xl'>

                {orderComplete ?
                    <motion.div className="flex flex-col w-10/12 justify-center items-center h-full font-poppins" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <img className="w-12 pb-5" src="https://media4.giphy.com/media/EIOKH2p0wqgl9KW5fg/giphy.gif" alt="" />
                        <div className="mb-5  flex items-center gap-1 mr-5" >
                            <i className='bx bx-check text-green-500 text-5xl'></i>
                            <p className="text-2xl">Order Filled</p>
                        </div>
                        <div className="w-full px-10">
                            <TransactionItem a={transaction} />
                        </div>
                        <Link className="mt-12 text-amber-500 mx-auto flex items-center gap-3" to={'/portfolio'} onClick={() => setIsOpen(false)}>
                            See Portfolio <i className='bx bx-right-arrow-alt' ></i>
                        </Link>
                    </motion.div>
                    :
                    <>
                        <div className="border-b border-zinc-700 flex justify-between items-center w-9/12">
                            <div className="text-2xl uppercase py-5 font-bold font-roboto">
                                <h3 className="">{symbol}/usdt</h3>
                                <h6 className={`text-sm ${priceChange.toFixed(2) > 0 ? 'text-green-500' : 'text-red-500'}`}>{priceChange.toFixed(2)}%
                                </h6>
                            </div>
                            <i onClick={() => setIsOpen(false)} className='bx bx-x text-5xl' ></i>
                        </div>
                        <div className="my-8 ">
                            <h3 className=" text-center text-5xl font-semibold font-poppins">${price}</h3>
                        </div>
                        <div className="w-9/12 flex items-center py-3 bg-zinc-600 mt-3 px-3">
                            <input readOnly value={(budget / 100 * amount).toFixed(2)} className="h-full w-full pr-2  rounded-lg bg-transparent  outline-none" type="number" placeholder="Amount to buy" min={0} />
                            <p className="">USDT</p>
                        </div>

                        <div className="w-9/12 my-2">
                            <Slider
                                sx={{
                                    color: 'rgb(245 158 11)',
                                    '& .MuiSlider-mark': {
                                        width: '10px',
                                        height: '10px',
                                        rotate: '45deg',
                                        marginLeft: '-9px',
                                        marginTop: '-1px'
                                    },

                                }}
                                aria-label="small"
                                defaultValue={0}
                                valueLabelFormat={(value) => `${value}%`}
                                marks={[
                                    { value: 0 },
                                    { value: 25 },
                                    { value: 50 },
                                    { value: 75 },
                                    { value: 100 }
                                ]}
                                steps={25}
                                valueLabelDisplay="auto"
                                min={0}
                                max={100}
                                onChange={handleChange}
                                value={amount}
                            />
                        </div>
                        <div className="flex flex-col items-center w-full ">
                            <div className="flex justify-between w-9/12">
                                <h2 className="text-gray-400">Avbl</h2>
                                <h2>{budget.toFixed(2)} USDT</h2>
                            </div>
                            <div className="flex justify-between w-9/12">
                                <h2 className="text-gray-400">Max buy</h2>
                                <h2 className="uppercase">{(budget / price).toFixed(4)} {symbol}</h2>
                            </div>
                            <div className="flex justify-between w-9/12">
                                <h2 className="text-gray-400">Est. Fee</h2>
                                <h2>{fee.toFixed(4)} USDT</h2>
                            </div>
                        </div>
                        <button onClick={submit} disabled={amount === 0 || budget < 10} className="bg-amber-500 mt-auto mb-8 py-4 w-9/12 hover:bg-amber-400 rounded-lg uppercase disabled:opacity-65">
                            Buy {symbol}
                        </button>
                    </>}
            </motion.dialog >

        </>, document.getElementById('modal'))
    )
}