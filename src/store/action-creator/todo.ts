import { TodoAction, TodoActionTypes} from "../../types/todo";
import {Dispatch} from "redux";
import axios from "axios";
import {ArrTodo} from "../models/todoModel";


export const fetchTodo = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const response = await axios.get<ArrTodo[]>('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit }
            })
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Error'})
        }
    }
};

///smiena nomera stranicy

export function setTodoPage(page: number){
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page
    }
}
