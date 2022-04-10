import {ArrTodo} from "../store/models/todoModel";

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

interface fetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}
interface fetchTodoActionSuccess {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS,
    payload: ArrTodo[]
}
interface fetchTodoActionError {
    type: TodoActionTypes.FETCH_TODOS_ERROR,
    payload: string
}
interface fetchTodoActionPage {
    type: TodoActionTypes.SET_TODO_PAGE
    payload: number
}

export type TodoAction = fetchTodoAction | fetchTodoActionError | fetchTodoActionSuccess | fetchTodoActionPage