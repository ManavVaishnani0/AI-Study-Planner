import { useState } from "react";
import TaskForm from "./components/TaskFrom";
import TaskList from "./components/TaskList";

function App(){
  const [task,setTask]=useState([
    {name:"Software Engineering",hours: 5 },
    {name: "Maths",hours:3}
  ]);
  return(
    <div>
      <h1>AI Study Planner</h1>
      <TaskForm/>
      <TaskList tasks={tasks}/>
    </div>
  );
}
export default App;