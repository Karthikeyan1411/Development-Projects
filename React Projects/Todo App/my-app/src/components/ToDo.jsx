import React, {useState} from "react"; // Import React, because we are doing project in react and 'react' library come from React
import './ToDo.css';   // Import CSS file

var TodoApp = () =>{

    var [tasks, setTasks] = useState([]);  // [old_one, new_one]
    var [newTask, setNewTask] = useState('');

    var addTask = () => {
        // trim() used for removing white space
        if (newTask.trim() !== ''){
            setTasks([...tasks, {id: Date.now(), text: newTask, completed: false}]);
            // new_one([...previous_task, {id: current_date, text: newTask, completed: false}])
            setNewTask(''); // remove all while page refresh
        };
    };

    var toggleTask = (taskId) =>{
        // we need previous task also available when enter new one
        setTasks((prevTasks) => 
            prevTasks.map((task) => 
                task.id === taskId ? {...task, completed: !task.completed} : task
    ));
    };

    var deleteTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) =>
                task.id !== taskId));
    };

    return(
    <div className="todo-app">
        {/* <title>ToDo App</title> */}
        <h1>ToDo App</h1>
        <div className="input-container">
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a New Task" />
            {/* newTask -> already entered value(old one), setNewTask -> new value entered(New One) */}
            <button onClick={addTask}>Add Task</button>
        </div>
        <ul>
            {/* map used for returning list items */}
            {tasks.map((task) => (
                // set key(id) for new tasks, and if task completed we want to display empty one
                <li key={task.id} className={task.completed ? 'completed' : ''} >
                    <input type="checkbox" className="checkbox" checked={task.completed} onChange={()=> toggleTask(task.id)} />
                     {/*toggleTask function is used for displaying completed task like strike words when we click checkbox */}
                    <span>{task.text}</span>
                    <button onClick={()=> deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
    );
};
export default TodoApp;
// we need to give export, then only it display output