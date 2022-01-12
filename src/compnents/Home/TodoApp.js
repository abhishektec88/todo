import React, { useState, useEffect,  } from "react";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodoTable } from "./Styled";

//Initial tasks
const tasks = [
  { name: "task 1", done: false },
  { name: "task 2", done: false },
  { name: "task 3", done: false }
];

function TodoApp() {
  const [todos, setTodos] = useState(tasks);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let count = 0;
    todos.map(todo => (!todo.done ? count++ : null));
    document.title = `${count} task${count > 1 ? "s" : ""} todo`;
  });

  //
  const _handleSubmit = e => {
    e.preventDefault();
    if (inputValue === "") return alert("Task name is required");

    const newArr = todos.slice();
    newArr.splice(0, 0, { name: inputValue, done: false });
    setTodos(newArr);
    setInputValue("");
  };

  const handleBntClick = ({ type, index }) => {
    const newArr = todos.slice();
    if (type === "remove") newArr.splice(index, 1);
    else if (type === "completed") newArr[index].done = true;

    return setTodos(newArr);
  };


  return (
    <>
      <TodoForm
        onSubmit={_handleSubmit}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <TodoTable>
        {todos.map((todo, index) => (
          <TodoList
            key={index}
            todo={todo}
            remove={() => handleBntClick({ type: "remove", index })}
            completed={() => handleBntClick({ type: "completed", index })}
          />
        ))}
      </TodoTable>
    </>
  );
}

export default TodoApp;
