import React from "react";
import {useState,useRef,useEffect} from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4}from 'uuid';
import "./index.css";

const local = 'todoAPP.todos'

function App() {
  const[todos,setTodos] = useState([])
  const todoNameRef = useRef()
  //var uname = useRef()

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(local))
    if(storedTodos)setTodos(storedTodos)
  },[])

  useEffect(()=>{
    localStorage.setItem(local,JSON.stringify(todos))
  },[todos])
  
  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '')return
    setTodos(prevTodos=>{
      return [...prevTodos,{id:uuidv4(),name:name,complete:false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodo(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <div>
      <h1 className="title">Hello </h1>
      <input className="task" ref = {todoNameRef} type="text" style={{color:'black'}}/>
      
      <button className="btn" style={{backgroundColor:'red',color:'white',scale:'inherit'}} 
        onClick = {handleAddTodo}>Add Todo</button>
      <button className="btn" style={{backgroundColor:'green',color:'white'}} 
        onClick= {handleClearTodo}
        >Clear Todo</button>

      <TodoList todos={todos} toggleTodo = {toggleTodo} />
      <div>Hi</div>
      <div>You still need to do 
        <span style = {{color:'red'}}> {todos.filter(todo=>!todo.complete).length} </span> 
        things </div>
    </div>
  )
}

export default App;
