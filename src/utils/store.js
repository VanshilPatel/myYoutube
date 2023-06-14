import SearchSlice from "./SearchSlice";
import appSlice from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";


const store = configureStore({
    reducer : {
        app : appSlice,
        search : SearchSlice,
        chat : chatSlice
    }
})

export default store;