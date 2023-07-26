import axios from "axios";
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO } from "./type";

const BASE_URL = "http://localhost:4001/todo";

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${BASE_URL}/createTodo`, { data })
        dispatch({ type: ADDNEW_TODO, payload: res.data });
    }
    catch (error) {
        console.log("Erroe while calling addNewTodo API", error.message);
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BASE_URL}/getTodo`)
        dispatch({ type: GETALL_TODO, payload: response.data });
    } catch (error) {
        console.log("Erroe while calling getAllTodos API", error.message);
    }
}

export const toggleTodo = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${BASE_URL}/getTodo/${id}`)
        dispatch({ type: TOGGLE_TODO, payload: response.data });
    } catch (error) {
        console.log("Erroe while calling toggleTodo API", error.message);
    }
}

export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const response = await axios.put(`${BASE_URL}/updateTodo/${id}`, { data })
        dispatch({ type: UPDATE_TODO, payload: response.data });
    } catch (error) {
        console.log("Erroe while calling updateTodo API", error.message);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(`${BASE_URL}/deleteTodo/${id}`)
        dispatch({ type: DELETE_TODO, payload: response.data });
    } catch (error) {
        console.log("Erroe while calling deleteTodo API", error.message);
    }
}