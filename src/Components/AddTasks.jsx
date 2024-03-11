import { useContext } from 'react'
import { todoitem } from '../store/todo-items-store'
import style from './AddTasks.module.css'
import ToDoItem from './ToDoItem'

function AddTasks(){
 const TasksObj= useContext(todoitem);
  const task=TasksObj.task;
  return (
    <>
   <div className={style['item-style']} >
      {task.map((task)=>(
        <ToDoItem key={task.name} todoname={task.name}
        tododate={task.date}></ToDoItem>
      ))}
    </div>
    </>
  )
}
export default AddTasks