import {applyMiddleware, createStore} from "redux";
import cocktailReducer from "../../cocktails/presentation/redux/reducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger";

export const store = createStore(
    cocktailReducer, applyMiddleware(thunk, logger)
);
