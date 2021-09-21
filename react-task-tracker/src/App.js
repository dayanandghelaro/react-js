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
    const response = await fetch("http://localhost:5000/tasks")
    const data = await response.json()
    return data
  }


  // ADD Task
  const addTask = async (task)=>{
 
    const response = await fetch("http://localhost:5000/tasks/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })

    const newTask = await response.json()
    setTasks([...tasks, newTask])
  }


  // DELETE a TASK
  const deleteTask = async (id)=>{

    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"DELETE"
    })

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
