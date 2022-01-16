import React from "react";
import TodoApp from "./TodoApp";
import { Container,Heading } from "./Styled";

function index() {
  return (
    <Container>
      <Heading>ToDo List</Heading>
      <TodoApp/>
    </Container>
  );
}

export default index;
