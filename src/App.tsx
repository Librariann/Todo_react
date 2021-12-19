import React, { useEffect, useState } from 'react';
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
interface Todo {
  id: number; 
  text: string; 
}

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [value, setValue] = useState('');
  const [currentValue, setCurrentValue] = useState<string | null>(() =>
      localStorage.getItem("todos")
    );

  
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget:{ value }
    } = event
    setValue(value);
    console.log(value);
  }

  const onClick = (event:React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTodo([
      ...todo,
      {
        id:todo.length+1,
        text: value
      }

    ])
    localStorage.setItem("todos",JSON.stringify(todo));

    console.log(todo);
  }
  useEffect(() => {
    setTodo([
      JSON.parse(currentValue)
    ])
  });




  return (
    
    <>
      <GlobalStyle />
      <Div>
        <H1>ToDo-List</H1>
        <form>
          <Input 
            onChange={onChange}
            type='text'
          />

          <InputBtn 
            type='button'
            value='확인'
            onClick={onClick}
          />
        </form>
        {todo.map((val, idx) => {
            return <Div>{val.text}</Div>
        })}
      </Div>
    </>
  );
}

export default App;
