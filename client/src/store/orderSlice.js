import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    order : []
}

const orderSlice = createSlice({
    name : 'order',
    initialState : initialValue,
    reducers : {
        setOrder : (state,action)=>{
            state.order = [...action.payload]
        },
        removeOrder: (state, action) => {
        state.order = state.order.filter(o => o._id !== action.payload)
        }
    }
})

export const {setOrder, removeOrder } = orderSlice.actions

export default orderSlice.reducer