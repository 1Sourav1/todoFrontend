import React from 'react';
import InputTodo from './components/InputTodo';
import DisplayTodo from './components/DisplayTodo';

const App = () => {
    return (
        <div className='container bg-light'>
            <h1 className='text-center mt-3 p-2'>Todo App</h1>
            <div className='d-flex justify-content-center'>
                <InputTodo />
            </div>
            <div>
                <DisplayTodo />
            </div>
        </div>
    )
}

export default App;