import React from "react";
import { ListItem,TodoText} from "./Styled";

export default function TodoList(props) {
    const { name, done } = props.todo;
    return (
        <>
         <ListItem style={{ textDecoration: done ? "line-through" : "" }}>
             <span className="span-check">
             <input type="checkbox" onClick={props.completed}/>
             </span>
          <TodoText>{name}</TodoText>
          <p type="button" onClick={props.remove}><i class="fas fa-trash-alt"></i></p>
        </ListItem>   
        </>
    );
}



