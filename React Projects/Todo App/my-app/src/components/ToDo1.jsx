import React, {useState} from "react";
import './ToDo1.css'

var ToDo1 = () => {

    var [tasks, setTasks] = useState([]);
    var [newTask, setNewTask] = useState('');

    var addTask = () => {
        if(newTask.trim() !== ''){
            setTasks([...tasks, {id: Date.now(), text: newTask, completed: false}]);
            setNewTask('');
        }
    }

    var toggleTask = (taskId) =>{
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? {...task, completed: !task.completed} : task
            ));
    };

    var deleteTask = (taskId) =>{
        setTasks((prevTasks) =>
            prevTasks.filter((task) =>
                task.id !== taskId));
    };

    return(
        <div className="app-container">
            <h1>Simple Todo App</h1>
            <div className="inputs">
                <input type="text" className="input-task" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter new task"/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? 'completed' : ''}>
                        <input type="checkbox" checked={task.completed} onChange={()=> toggleTask(task.id)} className="checkbox"/>
                        <span>{task.text}</span>
                        <button onClick={()=> deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDo1;