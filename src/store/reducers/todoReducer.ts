
import {ITodo} from "../models/todoModel";
import {TodoAction, TodoActionTypes} from "../../types/todo";


const initialState: ITodo = {
    todo: [],
    page: 1,
    limit: 10,
    loading: false,
    error: null,
}

export const todoReducer = (state = initialState, action: TodoAction ): ITodo => {
      switch(action.type){
          case TodoActionTypes.FETCH_TODOS:
              return {...state, loading: true};
          case TodoActionTypes.FETCH_TODOS_SUCCESS:
              return {...state, todo: action.payload, loading: false};
          case TodoActionTypes.FETCH_TODOS_ERROR:
              return {...state, loading: false, error: action.payload};
          case TodoActionTypes.SET_TODO_PAGE:
              return {...state, page: action.payload};
          default:
              return state
      }
}