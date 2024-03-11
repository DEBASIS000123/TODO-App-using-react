import { useContext, useRef} from "react"
import { todoitem } from "../store/todo-items-store";

function AddTodo(){
  const {updatedtask}=useContext(todoitem);
  const todorefname=useRef();
  const todorefdate=useRef();

  const handelbuttonclicked=(event)=>{
    event.preventDefault();
    const intask=todorefname.current.value;
    const indate=todorefdate.current.value;
    updatedtask(intask,indate);

  };
  return (
  <form className={"row mt-4"} onSubmit={handelbuttonclicked}>
    <div className="col-6">
    <input type=" text" placeholder="Enter Todo Here" 
    ref={todorefname}/>
  </div>
  <div className="col-4">
    <input type="date" 
    ref={todorefdate}/>
  </div>
  <div className="col-2">
  <button type="submit" className="btn btn-success">Add</button>
  </div>
  </form>
  )
}
export default AddTodo