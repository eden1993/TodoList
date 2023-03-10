import React, { useState } from 'react'
import "./App.css"

function App() {
  
  const [list, setList] = useState ([]);
  const [input, setInput] = useState ("");
  
  
  const addTodo = (todo) => {
    const newTodo = {
    id: Math.random (),
    todo: todo
    }
    // add the todo list
    setList([...list, newTodo]);

    // clear input box
    setInput("");

  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const editTodo = (todo) => {
    setInput(todo.todo)
    deleteTodo(todo.id)
}

  
  
  return (
    <div className='todo'>
      <h1 className= "header">Todo list</h1>
      <input 
      type="text"
       value={input}
       onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)} className="delete">delete</button>
      
            <button onClick={() => editTodo(todo)} className="edit">Edit</button>

          </li>
        ))}
      </ul>
    </div>
  )
};

export default App;
