import React, { useEffect } from 'react';
import { getAllTodos } from "../redux/Action/action";
import { useDispatch, useSelector } from "react-redux";
import Todo from './Todo';

const DisplayTodo = () => {

    const dispatch = useDispatch()
    const allTodos = useSelector((state) => state.todos.data)

    useEffect(() => {
        dispatch(getAllTodos())
    }, [dispatch])

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {
                allTodos && allTodos.map((todo) => {
                    return (
                        <Todo key={todo._id} todo={todo} />
                    )
                })
            }
        </div>
    )
}

export default DisplayTodo;