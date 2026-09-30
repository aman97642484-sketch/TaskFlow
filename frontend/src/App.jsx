import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Foot from "./components/Foot"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} />
      <Foot />
    </div>
  )
}

export default App
