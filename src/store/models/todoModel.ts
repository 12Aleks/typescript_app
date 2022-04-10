export interface ArrTodo {
   id: number,
   title: string,
    completed:boolean
}

export interface ITodo {
    todo: ArrTodo[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number
}

