import React from "react";
import { TodoInput, Form, AddButton } from "./Styled";

export default function TodoForm(props) {
  return (
    <Form  onSubmit={props.onSubmit} style={{ paddingLeft: 40, marginTop: 16 }}>
      <TodoInput
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="New Task"
      />
      <AddButton type="submit">Add</AddButton>
    </Form>
  );
}
