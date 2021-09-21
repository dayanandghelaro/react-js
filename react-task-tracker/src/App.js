import { useState, useEffect } from "react"

import {BrowserRouter as Router, Route} from 'react-router-dom'

import AddTask from "./components/AddTask";
import Header  from "./components/Header"
import Tasks from "./components/Tasks";
import Footer from "./components/Footer"
import About from "./components/About"

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


  // Fetch task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    return response.json()
  }
  

  // ToggleReminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder:!taskToToggle.reminder}

    const response = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await response.json()

    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: data.reminder} : task ))
  }





  return (
    <Router>
      <div className="container">
        <Route path="/" exact render={(props)=>(
          <>
            <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            { showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
            ): (
              "No Tasks to show"
            )}
          </>
        )}
        />

        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
