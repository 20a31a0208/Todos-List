import React from 'react'
import { useState,useRef } from 'react'
import TodoList from './components/TodoList'
export default function App() {
  const [todos,setTodos]=useState([])
  const inputRef = useRef(null)
  const addTodo = () => {
    const data= inputRef.current?.value?.trim()
    if(!data) return;
    const todo = {
      text:data,
      id: Date.now(),
      isCompleted: false
    }
    setTodos([...todos,todo])
    inputRef.current.value=""
  }
  const deleteTodo= (id) => {
      setTodos((prev) => {
        return prev.filter((value) => value.id !== id)
      })
  }
  const updateTodo = (id) => {
    const newData = prompt()
    if (newData?.trim() === "") return ;

    setTodos((prev) => {
      return prev.map((value) => {
        if(value.id === id){
          value.text=newData
        }
        return value;
      })
    })

  }
  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((value) =>
        value.id === id ? { ...value, isCompleted: !value.isCompleted } : value
      )
    );
  };

  return (
  
    <div className="h-screen w-screen flex  justify-center items-center bg-slate-200 flex-col gap-y-4">
      <div>
      <h1 className="text-center  text-5xl text-black mt-5 mb-5">Todos</h1>
      <div className="mr-20">
      <h1 className="text-3xl font-bold mr-1 ">Create<span className="text-3xl font-normal ml-2">Task</span></h1>
      </div>
      </div>
      <div className="flex gap-x-2">
        
        <input type="text" className="h-10 w-80 border-solid outline-1 outline-slate-600  rounded-lg px-3 bg-white " placeholder="What needs to be done?" ref={inputRef}/>
        <button className="bg-blue-900 text-white h-10 px-2  text-xl font-medium pl-8 pr-8 border-none outline-none rounded-lg hover:bg-slate-300 hover:text-black" onClick={addTodo}>Add</button>
        
     </div>
     <div className="mr-20">
     <h1 className="text-3xl font-bold mr-1 ">My <span className="text-3xl font-normal" >Tasks</span></h1>
     </div>
     <ul>
     {
      todos.map((value,index) => {
        return <TodoList text={value.text}  key={index} id={value.id} deleteTodo={deleteTodo} updateTodo={updateTodo}  isCompleted={value.isCompleted} toggleCompleted ={toggleCompleted}/>
      })
     }
     </ul>

    </div>

    
    
  )
}