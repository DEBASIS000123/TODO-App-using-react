import style from './AddTasks.module.css'
import ToDoItem from './ToDoItem'
function AddTasks({Tasks, Handeldelete}){
  return (
    <>
   <div className={style['item-style']} >
      {Tasks.map((task)=>(
        <ToDoItem  Handeldelete={Handeldelete} key={task.name} todoname={task.name}
        tododate={task.date}></ToDoItem>
      ))}
    </div>
    </>
  )
}
export default AddTasks