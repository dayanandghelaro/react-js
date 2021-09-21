import { useState, useEffect } from "react"

import AddTask from "./components/AddTask";
import Header  from "./components/Header"
import Tasks from "./components/Tasks";
import "./index.css"


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async () =>{
      const tasksFromServerAPI = await fetchTasks()
      setTasks(tasksFromServerAPI)
    }
    getTasks()
  }, [])


  // Fetch tasks
  const fetchTasks = async () => {
    const result = await fetch("http://localhost:5000/tasks")
    const data = await result.json()
    return data
  }


  // ADD Task
  const addTask = (task)=>{
    const newTask = {"id": Math.floor(Math.random()* 10000)+1, ...task}
    setTasks([...tasks, newTask])
  }


  // DELETE a TASK
  const deleteTask = (id)=>{
    setTasks(tasks.filter(task => task.id !== id))
  }

  // ToggleReminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task ))
  }





  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      { showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ): (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
