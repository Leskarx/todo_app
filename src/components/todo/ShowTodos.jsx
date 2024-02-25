import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {add, remove,changeState} from "../../ReduxSlices/TodoSlices"

export default function ShowTodos() {
    const dispatch=useDispatch()
    const todos=useSelector(state=>state.todos)
    
    useEffect(()=>{
        const array  = localStorage.getItem("array");
       let a= JSON.parse(array)
    //    console.log("hello",a);
      //  console.log(a.length);
        if(a!=null && a.length!=0 ){
       dispatch(changeState(a))
      
        }
      },[])

    useEffect(()=>{
        localStorage.setItem("array",JSON.stringify(todos));
        // console.log(todoArray);
        
      
      
      
      },[todos])


    function clickHandler(id){

        dispatch(remove(id))
    }
  return (
  <div className=' w-1/2   mx-auto mt-20'>
    {
        todos.map((todo)=>{
          
           return(
           (todo.text=="")?<></>: <ul key={todo.id}  className='flex justify-between mt-3 rounded-md  '>
           <li key={todo.id} className='bg-slate-600  font-bold text-lg rounded-l-lg w-full px-4 flex items-center ' >{todo.text}</li>
           <button onClick={()=>{
               clickHandler(todo.id)
           }} className=' rounded-r-lg bg-red-600 p-4'>X</button>
       </ul>

       )
        })
    }

  </div>
  )
}
