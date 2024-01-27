import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit"

import { portfolioSlice } from "./portfolioSlice";
import newsSlice from "./newsSlice";


const coinListSlice = createSlice({
    name: 'coinList',
    initialState: {
        coins: [],
        fearGreedIndex: 0,
        isLoading: true
    },

    reducers: {
        setFearGreedIndex(state, action) {
            state.fearGreedIndex = action.payload
        },
        setCoins(state, action) {
            state.coins = action.payload
        },
        setLoading(state) {
            state.isLoading = false
        }
    }
})



export const coinListActions = coinListSlice.actions
const store = configureStore({
    reducer: {
        coinList: coinListSlice.reducer,
        newsList: newsSlice.reducer,
        portfolio: portfolioSlice.reducer
    }
})

export default store