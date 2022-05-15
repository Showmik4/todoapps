import React,{useState} from 'react'
import Todos from './Todos'

import style from './home.module.css'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from "uuid";




const Home = () => {

const [todos,setTodos]=useState([]);
const handleTodos = (todo) =>{

  setTodos((prevTodo) => {

return [...prevTodo,{id:uuidv4(),todo}]


  });
  
};

const handleRemoveTodo = (id)=>{

const filterTodo=todos.filter((todo)=>todo.id !== id );
setTodos(filterTodo);
//alert(id);
}
  return (
    <div className={style.container}>

        <h1> Todo Apps</h1>
 


<TodoForm onaddTodo={handleTodos} />
<Todos todos={todos} onRemoveTodo={handleRemoveTodo} />


    </div>
  )
}

export default Home