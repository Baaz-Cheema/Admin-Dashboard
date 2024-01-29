import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: {
        budget: 500,
        coins: [
            {
                "name": "Litecoin",
                "symbol": "ltc",
                "image": "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1696501400",
                "filled": 203.00,
                "amount": 3.13
            },
            {
                "name": "Bitcoin Cash",
                "symbol": "bch",
                "image": "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932",
                "filled": 120.00,
                "amount": 0.51
            },
            {
                "name": "Uniswap",
                "symbol": "uni",
                "image": "https://assets.coingecko.com/coins/images/12504/large/uni.jpg?1696512319",
                "filled": 100.00,
                "amount": 17.38
            }
        ]
        ,
        transactions: [
            {
                "name": "Litecoin",
                "symbol": "ltc",
                "filled": 203.00,
                "amount": 3.13,
                "date": "Fri Jan 26 2024 20:33:37",
                "fee": (0.0021)
            },
            {
                "name": "Bitcoin Cash",
                "symbol": "bch",
                "filled": 120.00,
                "amount": 0.51,
                "date": "Sat Jan 27 2024 15:22:21",
                "fee": (0.0021)
            },
            {
                "name": "Uniswap",
                "symbol": "uni",
                "filled": 100.00,
                "amount": 17.38,
                "date": "Sun Jan 28 2024 10:11:05",
                "fee": (0.0023)
            }
        ]
    },
    reducers: {
        subtractBudget(state, action) {
            state.budget = state.budget - action.payload
        },
        addTransaction(state, action) {
            state.transactions.unshift(action.payload)
        },
        addCoinToPortfolio(state, action) {
            const coinExists = state.coins.findIndex((a) => a.symbol === action.payload.symbol)
            if (coinExists !== -1) {
                console.log(action.payload)
                state.coins[coinExists].filled += action.payload.filled
                state.coins[coinExists].amount += action.payload.amount
                return
            }
            state.coins.unshift(action.payload)
        }
    }
})

export const portfolioSliceActions = portfolioSlice.actions


