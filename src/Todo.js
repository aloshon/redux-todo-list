import React from 'react';
import {useDispatch} from 'react-redux';
import './Todo.css';

const Todo = ({id, task}) => {
    const dispatch = useDispatch();
    const remove = (index) => dispatch({type: "REMOVE", payload: index});
    return(
        <li className="todo">
            <p className="todo-task">{task}</p>
            <button className="todo-button" onClick={() => remove(id)}>X</button>
        </li>
    )
}
export default Todo;