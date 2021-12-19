<<<<<<< HEAD
import React from "react";
import MyComponent from "./MyComponent/MyComponent";

function App() {
  return <MyComponent nameIntro="React" />;
=======
import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styled-components/globalstyle';

const Div = styled.div`
  width:300px;
  height:100%;
  margin:0 auto;
  background-color:blueviolet;
`;

const H1 = styled.h1`
  text-align:center
`;

const Input = styled.input`
  width:250px;
`;

const InputBtn = styled.input`
  width:48px;
`;

function App() {
  const [todo, setTodo] = useState('');

  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget:{ value }
    } = event

    setTodo(value);
    console.log(value);
  }

  const onClick = (event:React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log('Click!!');
  }
  return (
    <>
      <GlobalStyle />
      <Div>
        <H1>ToDo-List</H1>
        <form>
          <Input 
            value={todo}
            onChange={onChange}
            type='text'
          />

          <InputBtn 
            type='button'
            value='확인'
            onClick={onClick}
          />
        </form>
      </Div>
    </>
  );
>>>>>>> adfc7bfe4d6507423fab118fa9ed117d21f600d8
}

export default App;
