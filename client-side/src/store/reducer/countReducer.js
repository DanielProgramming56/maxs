import { createSlice } from "@reduxjs/toolkit"


const countSlice = createSlice({
    name: "count",
    initialState: { number: 0 },
    reducers: {
        setCount(state, action) {
            state.number = action.payload
        }
    }
})

const countAction = countSlice.actions
const countReducer = countSlice.reducer

export {countAction, countReducer}