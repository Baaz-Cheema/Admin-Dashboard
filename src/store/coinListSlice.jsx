import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit"
import newsSlice from "./newsSlice";


const coinListSlice = createSlice({
    name: 'coinList',
    initialState: { coins: [], fearGreedIndex: 0 },
    reducers: {
        setFearGreedIndex(state, action) {
            state.fearGreedIndex = action.payload
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