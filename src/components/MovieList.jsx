import React, {useState, useRef} from 'react'
import CheckList from './SharedComponents/CheckList'
import { NavBar } from './NavBar'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import '../App.css'




function MovieList() {
  const [todos, setTodos] = useState([])
  const addRef = useRef()

  function checkBox(id) {
    const newStuff = [...todos]
    const todo = newStuff.find(specificItem => specificItem.id === id)
    todo.isComplete = !todo.isComplete
    setTodos(newStuff)
  }

 function addTodo(event) {
    const taskName = addRef.current.value
    if (taskName){
      setTodos(oldTodos => {
        return [...oldTodos, { id: uuidv4(), name: taskName, isComplete: false}]
      })
      addRef.current.value = null
    } else {
      return null
    }
  }

  function clearTodos() {
    const newTodos = todos.filter(specificItem => !specificItem.isComplete)
    setTodos(newTodos)
  }


  return (
    <>
    <NavBar />
    <div className='app padding-bottom'>
      <div className='flex-column margin-top'>
        <h1><Link to={'/'}>Montoya's Movie Mania</Link></h1>
        <h2>Add Movies to watch!</h2>
        <CheckList className='list-items' todos={todos} checkBox={checkBox}/>
      </div>
        <input className='check-form' ref={addRef} type="text" />
        <div className='flex-row'>
        <button className='padding-5 margin-5' onClick={addTodo}>Add Item</button>
        <button className='padding-5 margin-5' onClick={clearTodos} >Delete</button>
        </div>
    </div>
    </>
  );
}
  
  export default MovieList;
  