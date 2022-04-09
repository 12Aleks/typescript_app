import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer";

const rootReducer = combineReducers({
    users: userReducer
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export type ApiState = ReturnType<typeof rootReducer>