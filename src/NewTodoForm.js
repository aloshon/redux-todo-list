import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import './NewTodoForm.css';

const NewTodoForm = () => {
    const dispatch = useDispatch();
    const add = (data) => dispatch({type: "ADD", payload: data});

    const initialState = {
        task: ''
    }

    const [formData, setFormData] = useState(initialState);

    const [id, setId] = useState(0);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    // Set id on form submit so that React can figure out 
    // which todo to delete
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.task){
            alert('Tasks must not be empty!');
            return
        }
        add({...formData, id: id});
        setId(id + 1);
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            id="task"
            type="text"
            name="task" 
            placeholder="New Task" 
            value={formData.task} 
            onChange={handleChange}/>
            <button className="submit-task">Add</button>
        </form>
    )
}

export default NewTodoForm;