import React from 'react';
import {useSelector} from 'react-redux';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
    const todos = useSelector(store => store);

    return (
        <div style={{width: '100%', marginTop: '50px'}}>
            <NewTodoForm />
            <h1>Todo List</h1>
            <ol className="todo-list">
                {todos.map(t => (
                    <Todo key={t.id}
                    id={t.id}
                    task={t.task} />
                ))}
            </ol>
        </div>
    )
}

export default TodoList;