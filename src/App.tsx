import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";


function App() {
  return (
    <div>
        <h2>Users list</h2>
        <UserList/>
        <hr/>
        <h2>Todos list</h2>
        <TodoList/>
    </div>
  );
}

export default App;
