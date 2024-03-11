import Container from './Components/Container'
import TodoHeading from './Components/TodoHeading'
import AddTodo from './Components/AddTodo'
import AddTasks from './Components/AddTasks'
import './App.css'
import { useState } from 'react'
import WelcomeMeaasge from './Components/WelcomeMessage'
import { todoitem } from './store/todo-items-store'

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
    <todoitem.Provider value={{task,Handeldelete,updatedtask,}}> 
      <Container>
        <TodoHeading></TodoHeading>
         <AddTodo></AddTodo>
        <WelcomeMeaasge></WelcomeMeaasge>
        <AddTasks></AddTasks>
    </Container>
    </todoitem.Provider>
  )

}

export default App
