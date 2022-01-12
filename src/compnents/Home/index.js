import React from "react";
import { Container,Heading } from "./Styled";
import TodoApp from "./TodoApp";

function index() {
  return (
    <Container>
      <Heading>ToDo List</Heading>
      <TodoApp/>
    </Container>
  );
}

export default index;
