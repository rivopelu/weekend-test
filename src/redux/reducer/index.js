import {combineReducers} from "redux";
import {createSlice} from "@reduxjs/toolkit";


const initState = {
    loadingTestimonial: false,
    loadingHelpAndTips: false,
    dataTestimonial: null,
    dataHelpAndTips: null,
}

export const DataSlice = createSlice({
    name: "data",
    initialState: initState,
    reducers: {
        setTestimonial: (state, action) => {
            state.loadingTestimonial = action.payload.loading;
            state.dataTestimonial = action.payload.data;
        },
        setHelpAndTips: (state, action) => {
            state.loadingHelpAndTips = action.payload.loading;
            state.dataHelpAndTips = action.payload.data;
        }
    }
})

export default combineReducers({
    MainData: DataSlice.reducer
})
