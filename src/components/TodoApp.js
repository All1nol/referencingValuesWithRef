import React, { useState, useRef } from 'react';
import TaskList from './TaskList';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null); 

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    inputRef.current.value = 'ref: '; 
    inputRef.current.focus(); //focusing on input after commiting new task
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    if (task.trim() !== '') {
      addTask(task);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTask}>
        <input type="text" name="task" ref={inputRef} />
        <button type="submit">Add Task</button>
      </form>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default TodoApp;
