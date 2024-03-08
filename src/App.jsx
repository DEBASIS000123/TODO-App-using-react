import Container from './Components/Container'
import TodoHeading from './Components/TodoHeading'
import AddTodo from './Components/AddTodo'
import AddTasks from './Components/AddTasks'
import './App.css'
import { useState } from 'react'
import WelcomeMeaasge from './Components/WelcomeMessage'

function App() {
  const initialtask=[
    {name:"Take Milk", date:"30.10.23"},
    {name:"Go to College", date:"31.10.23"},
    {name:"Listen Music", date:"now"}
  ];
  
  let [task,settask]=useState(initialtask);
  const updatedtask=(itemname,itemdate)=>{
    console.log(itemname+" "+itemdate);
    const newtasks=[...initialtask,{name:itemname, date:itemdate}];
    settask(newtasks);
  };
  return (
    <Container>
      <TodoHeading></TodoHeading>
      <AddTodo updatedtask={updatedtask}></AddTodo>
      {task.length=== 0 && <WelcomeMeaasge></WelcomeMeaasge>}
      <AddTasks Tasks={task}></AddTasks>
    </Container>
  )

}

export default App
