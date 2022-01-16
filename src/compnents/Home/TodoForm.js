import React,{useState} from "react";
import { TodoInput, Form, PButton } from "./Styled";

export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      complete: false
    });
    setInput("");
  };
  return (
    <Form  onSubmit={handleSubmit} style={{ paddingLeft: 40, marginTop: 16 }}>
      <TodoInput
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="New Task"
      />
      <PButton type="submit">Add</PButton>
    </Form>
  );
}

