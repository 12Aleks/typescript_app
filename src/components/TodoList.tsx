import React, {FC, useEffect} from 'react';
import {apiUseSelector, useApiDispatch} from "../hooks/hooks";

const TodoList: FC = () => {
    const {todo, error, loading, limit, page} = apiUseSelector(state => state.todos)
    const {fetchTodo, setTodoPage} = useApiDispatch();

    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodo(page, limit)
    }, [page])

    if (loading) {
        return <h1>Loading ....</h1>
    }
    if (error) {
        return <h1>Error :(</h1>
    }

    return (
        <div>
            {
                todo.map(t =>
                    <div key={t.id}
                         style={{width: '50%', border: '1px solid black', margin: '15px', padding: '20px'}}>
                        <h3>{t.id}. {t.title}</h3>
                        <p>{t.completed}</p>
                    </div>
                )
            }
            <div style={{display: 'flex'}}
              >
                {
                    pages.map(p =>
                        <div style={{
                            border: p === page ? '2px solid blue' : '1px solid gray',
                            padding: '10px'
                        }}
                        onClick={() => setTodoPage(p)}
                        >{p}</div>
                    )
                }
            </div>
        </div>
    );
};

export default TodoList;