import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit"
import newsSlice from "./newsSlice";


const coinListSlice = createSlice({
    name: 'coinList',
    initialState: {
        coins:  [],
        fearGreedIndex: 0,
        pages: []
    },

    reducers: {
        setFearGreedIndex(state, action) {
            state.fearGreedIndex = action.payload
        },
        setCoins(state, action) {
            state.coins = action.payload
        },
        setPages(state, action) {
            state.pages.push(action.payload)
        }
    }
})









export const coinListActions = coinListSlice.actions
const store = configureStore({
    reducer: {
        coinList: coinListSlice.reducer,
        newsList: newsSlice.reducer
    }
})
export default store