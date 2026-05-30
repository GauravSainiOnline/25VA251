import React, { useState } from 'react'

function TodoList() {

    const [task, setTask] = useState('');
    const [todo, setTodo] = useState([]);

    const addTask = () => {
        if (task.trim() != "") {
            setTodo([...todo, task]);
            setTask('');
        }
    }
    
    return (
        <div>
            <h1>Todo List</h1>
            
            <input type="text" value={task} placeholder='Add Task To List' onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
            {todo.map((t, index) => {
                return (
                    <ul key={index}>
                        <li>
                             {t}
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}

export default TodoList;