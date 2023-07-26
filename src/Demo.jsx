import React, { useState } from "react";

const TodoList = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAddTodo = () => {
        if (title && description) {
            const newTodo = {
                title: title,
                description: description,
            };
            setTodos([...todos, newTodo]);
            setTitle("");
            setDescription("");
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </div>
            <div>
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <div>
                {todos.map((todo, index) => (
                    <div key={index}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;