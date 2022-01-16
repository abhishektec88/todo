import React, { useState} from "react";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodoTable } from "./Styled";



function TodoApp() {
  //Initial tasks
  const [todos, setTodos] = useState([]);
  const [editId, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleEditChange = (id, text) => {
    setEdit(id);
    setInputValue(text);
  };

  // Add the task
  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  // Remove Task
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todoId) => todoId.id !== id);
    setTodos(removedArr);
  };

  // Completed Task
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  //Edit Task
  const editTodo = (id, text) => {
    let editTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(editTodos);
    setEdit(false);
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <TodoTable>
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
        handleEditChange={handleEditChange}
        editId={editId}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      </TodoTable>
    </>
  );
}



export default TodoApp;

