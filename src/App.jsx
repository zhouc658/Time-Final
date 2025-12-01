import { useState } from 'react'

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState("clock") //we start with the clock loading page for this world, and then intro, planner, tasks, ending
  const [tasks, setTasks] = useState(0) //the amount of tasks they did, start from 0
  const [taskType, setTaskType] = useState([]) //the type of task they can do: work , social, personal
  const [addedTime, setAddedTime] = useState(0); //the amount of time users decide to add for a task

  //need a function to handle the three task types, and record what type it is and then when a type is choosen it will go to the Task description page
  const handleTaskType= (type) =>{ 
    setTaskType([...taskType] )
    setCurrentPage("Task1Description")
  }
  if (currentPage === "clock") {
    return (
      <div onClick={() => setCurrentPage("intro")}>
        <img
          className="clock"
          src="/asset/clock.png"
        />
      </div>
    )
  }
  //so if the currentpage is introduction then we will show all of this info on that page
  if (currentPage === "intro") {
    return (

      <div>
        <p>
          Welcome to the Time World. Here, you have control over your time—you can speed it up or let it flow normally for whatever you are doing. But any extra time comes borrowed from your future.
          With the help of your life planner, you’ll decide how to spend your days. You must complete at least three tasks, choosing what to do and whether to add extra time to each.
          There’s no right or wrong—only the consequences of your choices. Make them carefully… and have a good time here.
        </p>

        <button onClick={() => setCurrentPage("planner")}>Start</button>
      </div>
    )
  }

  if (currentPage === "planner"){
    return(
      <div>
        <h1>Welcome to Your Life Planner!</h1>
        <p>Let's start planning your day! Click on a task to decide what you want to do.</p>
        <button onClick={() => setCurrentPage("Task1")}>Task 1</button>
        <button onClick={()=> setCurrentPage("Task2")}>Task 2</button>
        <button onClick={()=> setCurrentPage("Task3")}>Task 3</button>
      </div>
    )
  }

  if (currentPage === "Task1"){
    
    return (
      <div>
        <h2> What would you like to do right now?</h2>
        
      </div>
    )
  }
}

export default App
