import style from './AddTasks.module.css'
import ToDoItem from './ToDoItem'
function AddTasks({Tasks}){
  return (
    <>
   <div className={style['item-style']} >
      {Tasks.map((task)=>(
        <ToDoItem key={task.name} todoname={task.name}
        tododate={task.date}></ToDoItem>
      ))}
    </div>
    </>
  )
}
export default AddTasks