import {logger} from "redux-logger";
import {configureStore} from "@reduxjs/toolkit";
import reducer from "../../cocktails/presentation/redux/sliceReducer";

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});
