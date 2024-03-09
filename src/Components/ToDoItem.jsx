
function ToDoItem({todoname,tododate,Handeldelete}){
  return <>
  <div className="row mt-3">
  <div className="col-6">
    {todoname}
  </div>
  <div className="col-4">
  {tododate}
  </div>
  <div className="col-2">
  <button type="button" className="btn btn-danger"
  onClick={()=> Handeldelete(todoname)}
  >Delete</button>
  </div>
</div>
  </>
}

export default ToDoItem