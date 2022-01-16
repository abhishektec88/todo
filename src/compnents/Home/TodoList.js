import React from "react";
import { ListItem, TodoText, TodoEdit, PButton } from "./Styled";



const TodoList = ({
  todos,
  completeTodo,
  removeTodo,
  editTodo,
  editId,
  handleEditChange,
  inputValue,
  setInputValue
}) => {
  return todos.map((todo) => (
    <ListItem style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>
      {editId === todo.id && !todo.isComplete ? (
        <TodoEdit 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      ) : (
        <>
        <span className="span-check">
            <input 
            type="checkbox"
            onClick={() => completeTodo(todo.id)} 
            />
        </span>
        <TodoText>{todo.text}</TodoText>
    </>
      )}
      {editId === todo.id && !todo.isComplete ? (
        <span className="span-check">
         <PButton onClick={() => editTodo(todo.id, inputValue)}>edit</PButton>
        </span>
      ) : (
        <>
          <p type="button" onClick={() => handleEditChange(todo.id, todo.text)} ><i className="fas fa-edit icon"></i></p>
          <p type="button" onClick={() => removeTodo(todo.id)}><i className="fas fa-trash-alt icon"></i></p>
        </>
      )}
    </ListItem>
  ));
};

export default TodoList;








