import React, {useEffect, useState } from 'react';

import Item from './Item';
import Form from './Form';

function App() {

  const [toDoList, setToDoList] = useState([
    { text: "Plant Spring Bulbs" }
  ]);

  const addNewItem = text => {
    const newList = [...toDoList, { text }];
    setToDoList(newList);
  };


  return (
    <section className="wrapper">
      <header>
        <h2>React ToDo List with Hooks</h2>
      </header>
      <div className="list">
        {toDoList.map((todo, index) => (
          <Item
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
      <Form addNewItem={addNewItem} />
    </section>
  );
}

export default App;
