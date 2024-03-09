import Container from './Components/Container'
import TodoHeading from './Components/TodoHeading'
import AddTodo from './Components/AddTodo'
import AddTasks from './Components/AddTasks'
import './App.css'
import { useState } from 'react'
import WelcomeMeaasge from './Components/WelcomeMessage'

function App() {

  let [task,settask]=useState([]);
  const updatedtask=(itemname,itemdate)=>{
    const newtasks=[...task,{name:itemname, date:itemdate}];
    settask(newtasks);
  };

  function Handeldelete(deleteditem){
    const newtodotask=task.filter(item=>item.name !==deleteditem );
    settask(newtodotask);
  }
  return (
    <Container>
      <TodoHeading></TodoHeading>
      <AddTodo updatedtask={updatedtask}></AddTodo>
      {task.length=== 0 && <WelcomeMeaasge></WelcomeMeaasge>}
      <AddTasks Tasks={task}  Handeldelete={Handeldelete}></AddTasks>
    </Container>
  )

}

export default App
