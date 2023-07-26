import React, { useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { toggleTodo, updateTodo, deleteTodo } from '../redux/Action/action';
import { useDispatch } from "react-redux"

const Todo = ({ todo }) => {

  const [edit, setEdit] = useState(false)
  const [newData, setNewData] = useState({
    title: todo.title,
    description: todo.description
  });

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEdit(!edit)
    dispatch(updateTodo(todo._id, newData))
  }

  return (
    <div className="card text-center w-25 m-2">
      <div className="card-body" onClick={() => dispatch(toggleTodo(todo._id))}>
        {
          edit ? (
            <form onSubmit={onFormSubmit}>
              <input type='text' className="form-control" value={newData.title} name='title'
                onChange={(e) => setNewData((newData) => ({ ...newData, [e.target.name]: e.target.value }))}
              />
            </form>
          )
            : (
              <h5 className="card-title">{todo.title}</h5>
            )
        }
        {
          edit ? (
            <form onSubmit={onFormSubmit}>
              <input type='text' className="form-control" value={newData.description} name='description'
                onChange={(e) => setNewData((newData) => ({ ...newData, [e.target.name]: e.target.value }))}
              />
            </form>
          )
            : (
              <p className="card-text">{todo.description}</p>
            )
        }


      </div>
      <div className='card-footer d-flex justify-content-around'>
        <button className="btn btn-primary btn-sm " onClick={() => setEdit(!edit)}><MdModeEditOutline /></button>
        <button className='btn btn-danger btn-sm'
          onClick={() => dispatch(deleteTodo(todo._id))}><AiFillDelete /></button>
      </div>
    </div>
  )
}

export default Todo;