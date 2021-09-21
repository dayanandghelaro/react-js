import { useState } from "react"

import AddTask from "./components/AddTask";
import Header  from "./components/Header"
import Tasks from "./components/Tasks";
import "./index.css"


function App() {

  const [tasks, setTasks] = useState([
    {
      "id":1,
      "text": "Work on Front-end",
      "day": "Sep 11, 2021",
      "reminder": false,
    },
    {
      "id":2,
      "text": "Complete React Crash Course",
      "day": "Sep 11, 2021",
      "reminder": true,
    },
    {
      "id":3,
      "text": "Team Discussion",
      "day": "Sep 11, 2021",
      "reminder": true,
    }
  ])


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
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ): (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
