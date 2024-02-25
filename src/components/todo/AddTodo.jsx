import {useState} from 'react'
import  {useDispatch}  from 'react-redux';
import {add, remove} from "../../ReduxSlices/TodoSlices"

export default function AddTodo() {
    const dispatch=useDispatch()
    let [inputF,SetinputF]=useState("");
    function submitHandler(e){
        e.preventDefault();
     dispatch(add(inputF))
     SetinputF("")
        
    }
  return (
    <div className=' fixed top-0 left-1/2 -translate-x-1/2 w-3/4'>
        <form onSubmit={submitHandler} className=' flex w-full' >
            <input
            value={inputF}
            onChange={(e)=>{
                SetinputF(e.target.value);
            }}
            className='outline-none rounded-l-lg text-xl w-full  p-6' type="text" />
            <button className=' rounded-r-lg   bg-blue-500 p-5 ' type='submit' >
                Add todo

            </button>

        </form>
      
    </div>
  )
}
