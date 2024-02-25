
import React from 'react'
import AddTodo from './components/todo/AddTodo'
import ShowTodos from './components/todo/ShowTodos'
import { Provider } from 'react-redux'
import store from './store/store'

export default function Rapp() {
  return (
    <div className=' w-full h-screen overflow-hidden'>
     <Provider store={store}>
     <AddTodo/>
      <ShowTodos/>
     </Provider>
     
    </div>
  )
}

// /* eslint-disable react/prop-types */
// import { useState,useEffect} from "react"
// import Todo from "./components/todo"
// import { TodoProvider } from "./context/todoContext"




// function App() {
// let [todo,setTodo]=useState("")
// let [todoArray,setTodoArray]=useState([])
// useEffect(()=>{
//   const array  = localStorage.getItem("array");
//  let a= JSON.parse(array)
//  console.log("hello",a);
// //  console.log(a.length);
//   if(a!=null && a.length!=0 ){
//     setTodoArray([...a])

//   }
// },[])
// useEffect(()=>{
//   localStorage.setItem("array",JSON.stringify(todoArray));
//   // console.log(todoArray);
  



// },[todoArray])

// function changeTodo(todo){
//   setTodoArray(
//     [...todoArray,{value:todo,id:new Date()}]
//      )
 
     
//      setTodo("")


// }
// function deleteTodo(newTodoArray){
//   setTodoArray([...newTodoArray])

// }




//   return (
//     <>
//     <TodoProvider value={{todoArray, changeTodo, deleteTodo}}>
//     <div className="h-full w-screen flex flex-col mt-20  overflow-x-hidden items-center gap-8">
//       <div className=" w-[40%] flex justify-center">
//         <input type="text" onChange={(e)=>{
//           setTodo(e.target.value)}}
//           onKeyDown={(e)=>{
//             if(e.key==="Enter" && todo!=""){
//              changeTodo(todo)
//             }
            
//            }} value={todo} className="w-[100%] pl-2 rounded-lg" />
//         <button onClick={()=>{
//           changeTodo(todo)
//  }} 
 
 
//   >Add Todo</button>
//       </div>
//     {(todoArray.length==0)? <div>no data</div> : todoArray.map((todo)=>{
//      return  <Todo key={todo.id} todoName={todo.value} id={todo.id}/>
//     }) }
   

//     </div>

//     </TodoProvider>

 

    

    
//     </>
//   )
// }

// export default App
