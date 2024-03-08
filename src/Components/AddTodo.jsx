import { useState } from "react"

function AddTodo({updatedtask}){
  let [intask,setintask]=useState();
  let [indate,setindate]=useState();

  const handelnamechnage=(event)=>{
    setintask(event.target.value);
    
  }
  const handeldatechnage=(event)=>{
    setindate(event.target.value);
    
  }
  const handelbuttonclicked=()=>{
    updatedtask(intask,indate);
    setintask=("");
    setindate=("");
  };
  return (
  <div className={"row mt-4"}>
    <div className="col-6">
    <input type=" text" placeholder="Enter Todo Here" 
    onChange={handelnamechnage} required/>
  </div>
  <div className="col-4">
    <input type="date" 
    onChange={handeldatechnage} required/>
  </div>
  <div className="col-2">
  <button type="button" className="btn btn-success"
  onClick={handelbuttonclicked}>Add</button>
  </div>
  </div>
  )
}
export default AddTodo