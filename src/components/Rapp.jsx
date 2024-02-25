import React from 'react'
import AddTodo from './todo/AddTodo'
import ShowTodos from './todo/ShowTodos'
import { Provider } from 'react-redux'
import store from '../store/store'

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
