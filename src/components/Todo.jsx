/* eslint-disable react/prop-types */
import UseTodo from "../context/todoContext.js"



export default function Todo({todoName="",id=new Date()}) {



  let { todoArray,deleteTodo}=UseTodo();

  return (
    <div className=" w-[60%] h-16 bg-red-600 flex justify-between items-center rounded-lg">
        <div className="flex justify-center items-center gap-4 ml-2">
        <input type="checkbox" />
        <p>{todoName}</p>

        </div>
        <div className="flex justify-center items-center gap-4 mr-2" >
        <button>Edit</button>
        <button onClick={()=>{
       let newArray=todoArray.filter((todo)=>(todo.id!=id))
       console.log(newArray);
       deleteTodo(newArray)
      



        }}>X</button>

        </div>
      
        

    
      
    </div>
  )
}
