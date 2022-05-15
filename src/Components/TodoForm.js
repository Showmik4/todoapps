import React, {useState} from 'react'
import style from './todoform.module.css'
const TodoForm = (props) => {

  const [todo,setTodo]=useState({title:"",time:""});
const {title,time}=todo;
const handleInput = (event)=>{

  const name=event.target.name;
  setTodo((oldTodo)=>{

    return {...oldTodo,[name]: event.target.value}
  })

}
const handleSubmit = (event) =>{

event.preventDefault();
props.onaddTodo(todo);
setTodo({title:"",time:""});

}


  return (
  <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
<label htmlFor='title'>Title</label>
<input type="text" id='title' name='title' value={title} onChange={handleInput}></input>
</div>

<div className={style["form-field"]}>
<label htmlFor='title'>Time</label>
<input type="text" id='time' name='time' value={time} onChange={handleInput}></input>
</div>
<div>
    <button type='submit'>Add ToDo</button>
</div>

  </form>
  )
}

export default TodoForm