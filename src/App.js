import React, { useState } from 'react';
import 'elix/src/Input.js';

//////////////////////////////////////////////////
// abstract this somewhere else

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

//////////////////////////////////////////////////
// abstract this somewhere else

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
      <elix-input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

//////////////////////////////////////////////////

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
        <h2>React with Elix Boilerplate</h2>
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
