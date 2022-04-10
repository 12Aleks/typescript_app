import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer";
import {todoReducer} from "./reducers/todoReducer";

const rootReducer = combineReducers({
    users: userReducer,
    todos: todoReducer
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export type ApiState = ReturnType<typeof rootReducer>
