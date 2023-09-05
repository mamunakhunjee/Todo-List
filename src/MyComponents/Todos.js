import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
  const myStyle = {
    minHeight : "70vh",
    margin : "50px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length ? props.todos.map((todo) => {
        return (
          <>
          <Todo todo={todo} key={todo.sNo} onDelete={props.onDelete} />
          <hr />
          </>
        )
      }) : "No Todos to display"}
      {/* {props.todos.map((todo) => {
        return <Todo todo={todo} key={todo.sNo} onDelete={props.onDelete} />
      })} */}
    </div>
  )
}
