import {createStore} from "redux";
import cocktailReducer from "../../cocktails/presentation/redux/reducer";

export const store = createStore(
    cocktailReducer
);
