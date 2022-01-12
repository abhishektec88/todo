import styled from "styled-components";

export const Container = styled.div`
padding-top: 100px;
`;

export const Heading = styled.h1`
text-align: left;
  margin-left: 20%;
`;

export const ListItem = styled.ul`
  display: flex;
  border-bottom: 1px solid rgb(216, 213, 213);
  padding-top: 16px;
`;

export const TodoInput = styled.input`
  width: 70%;
  margin-right: 40px;
  border: 2px solid rgb(219, 214, 214);
  border-radius: 4px;
`;

export const Form = styled.form`
margin: 40px 20% auto 20%;
`;

export const AddButton = styled.button`
background-color: rgb(23, 120, 199);
  border: none;
  color: white;
  padding: 6px;
  width: 60px;
  border-radius: 4px;
`;

export const TodoTable = styled.ul`
  margin: 57px 20% auto 20%;
  border: 1px solid rgb(216, 212, 212);
  border-radius: 4px;
  padding-left: 0px;
`;

export const TodoText = styled.label`
margin-right: 78%;
margin-bottom: 0px;
width: 100px;
`;



