import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    userorder : []
}

const userorderSlice = createSlice({
    name : 'userorder',
    initialState : initialValue,
    reducers : {
        setOrder : (state,action)=>{
            state.userorder = [...action.payload]
        }
    }
})

export const {setOrder } = userorderSlice.actions

export default userorderSlice.reducer