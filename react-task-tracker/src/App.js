import { useState } from "react"

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


  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
