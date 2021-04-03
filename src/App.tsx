import React, {useEffect, useState} from 'react';
import './App.css';
import {TaskCreator} from "./TaskCreator";
import {TaskList} from "./TaskList";
import Task from "./Task";


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = (taskTitle: string) => setTasks([{title: taskTitle}, ...tasks]);

  useEffect(() => {
    fetch('http://taskker-api.developia.info/api/tasks/all')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>Tasks</h1>
      <TaskCreator onCreate={addTask}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
