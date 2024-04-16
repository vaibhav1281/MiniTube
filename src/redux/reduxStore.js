import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import userSlice from "./userSlice";
import searchSlice from "./searchSlice";

const reduxStore = configureStore({
    reducer: {
        app: appSlice,
        user: userSlice,
        search: searchSlice,
    }
})

export default reduxStore;