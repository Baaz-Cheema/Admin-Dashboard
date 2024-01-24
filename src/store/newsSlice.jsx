import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: 'newsList',
    initialState: {
        news: [],
        pages: ['1st Page',],
        currentPageIndex: 0
    },
    reducers: {
        setNews(state, action) {
            state.news = action.payload
        },
        setPreviousPages(state, action) {
            state.pages.push(action.payload)
        },
        incrementIndex(state) {
            if (state.pages[state.pages.length - 1] !== null) {
                state.currentPageIndex++
            }
        },
        decrementIndex(state) {
            if (state.currentPageIndex !== 0) {
                state.currentPageIndex--
            }
        }
    }
})

export const newsListActions = newsSlice.actions

export default newsSlice