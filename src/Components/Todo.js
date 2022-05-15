import React from 'react'
import style from './todo.module.css'
function Todo(props) {
    const {title,time}=props.todo
    const {id}=props;
    const handleOnclick=(id)=>{
      props.onRemoveTodo(id);
    };
  return (
    <article className={style.todo}>
   
   <div>
   <h1>{title}</h1>

   
   
   <p>{time}</p>

   </div>
    
    <div>
    <button className={style.btn} onClick={()=>{handleOnclick(id)}}>
        <i className='fa fa-trash fa-2x'></i>
    </button>

   </div>


    </article>
  )
}

export default Todo