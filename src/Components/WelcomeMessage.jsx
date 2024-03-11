import { useContext } from 'react'
import { todoitem } from '../store/todo-items-store'
import style from './WelcomeMessage.module.css'


const WelcomeMeaasge=()=>{
  const contextObj=useContext(todoitem);
  const task=contextObj.task;
  return (
    task.length=== 0 && <h2 className={style.textstyle}> Nothing to do!!! Enjoy Your Day 🥳</h2>
  )
}
export default WelcomeMeaasge