import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit"


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
    reducer: coinListSlice.reducer
})
export default store