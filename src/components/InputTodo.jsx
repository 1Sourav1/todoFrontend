import React, { useState } from 'react';
import { addNewTodo } from '../redux/Action/action';
import { useDispatch } from "react-redux";

const InputTodo = () => {
    const [todos, setTodos] = useState({
        title: "",
        description: ""
    });

    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        setTodos((todos) => ({ ...todos, [e.target.name]: e.target.value }));
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        dispatch(addNewTodo(todos))
        setTodos({ title: "", description: "" })
    };

    return (
        <form className='mt-4 w-50' onSubmit={handleAddTodo}>
            <div className="form-group mb-2">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" name='title' value={todos.title}
                    onChange={handleChange} required />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" name='description' value={todos.description}
                    onChange={handleChange} required />
            </div>
            <div className="form-group mb-3 text-center">
                <button type="submit" className="btn btn-primary mt-2 w-50">Add Todo</button>
            </div>
        </form>
    )
}

export default InputTodo;