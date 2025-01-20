import { configureStore } from "@reduxjs/toolkit";
import filterReducer from '../libAdmin/features/filterSlice'

const store = configureStore({
    reducer: {
        filter: filterReducer
    }
})

export default store