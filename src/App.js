import React, {useEffect, useState } from 'react';

import Item from './Item';
import Form from './Form';

function App() {

  const [toDoList, setToDoList] = useState([
    { 
      text: "Plant Spring Bulbs",
      isComplete: false,
    }
  ]);

  const addNewItem = text => {
    const newList = [...toDoList, { text }];
    setToDoList(newList);
  };

  const completeItem = index => {
    const newList = [...toDoList];
    newList[index].isCompleted = true;
    setToDoList(newList);
  };

  const deleteItem = index => {
    const newList = [...toDoList];
    newList.splice(index, 1);
    setToDoList(newList); 
  }

  return (
    <section className="wrapper">
      <header>
        <h2>React ToDo List with Hooks</h2>
      </header>
      <div className="list">
        {toDoList.map((todo, index) => (
          <Item
            className={todo.isCompleted ? "item item--completed" : "item"}
            key={index}
            index={index}
            isCompleted={todo.isCompleted}
            todo={todo}
            completeItem={completeItem}
            deleteItem={deleteItem}
          />
        ))}
      </div>
      <Form addNewItem={addNewItem} />
    </section>
  );
}

export default App;
