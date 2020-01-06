import React, { useState } from 'react';
import { WiredButton, WiredCard, WiredInput } from "wired-elements";

// import TodoForm from './TodoForm';

const Todo = ({ todo }) => <wired-card className="todo">{todo.text}</wired-card>;

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {

  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };


  return (
    <section>
      <header>
        <h2>WiredJS Boilerplate</h2>
      </header>
      <div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </section>
  );
}

export default App;
