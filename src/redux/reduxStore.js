import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import userSlice from "./userSlice";

const reduxStore = configureStore({
    reducer: {
        app: appSlice,
        user: userSlice,
    }
})

export default reduxStore;