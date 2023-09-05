import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { Footer } from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("I am onDelete", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }

  const addTodo = (title, desc) => {
    let sNo;
    if (todos.length == 0) {
      sNo = 1;
    }
    else {
      sNo = todos[todos.length - 1].sNo + 1;
    }
    const myTodo = {
      sNo: sNo,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);

  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
