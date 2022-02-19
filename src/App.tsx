import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styled-components/globalstyle';

const Div = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 auto;
  background-color: blueviolet;
`;

const H1 = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  width: 250px;
`;

const InputBtn = styled.input`
  width: 48px;
`;
interface ITodo {
  id: number;
  text: string;
}

function App() {
  const [todo, setTodo] = useState<ITodo[]>([]);
  const [value, setValue] = useState<string>('');

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = event;
    setValue(value);
  };

  const onClick = () => {
    const addTodo = {
      id: todo.length + 1,
      text: value
    };
    setValue('');
    setTodo(todo.concat(addTodo));
    localStorage.setItem('todos', JSON.stringify(todo.concat(addTodo)));
  };

  const enterHandle = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13) {
      onClick();
    }
  };

  const setTodos = useCallback(() => {
    setTodo([...JSON.parse(localStorage.getItem('todos') || '')]);
  }, []);

  useEffect(() => {
    setTodos();
  }, [setTodos]);

  return (
    <>
      <GlobalStyle />
      <Div>
        <H1>ToDo-List</H1>
        <Input onChange={onChange} onKeyDown={enterHandle} value={value} type="text" />
        <InputBtn type="button" value="확인" onClick={onClick} />
        {todo.map((val, idx) => {
          return <Div key={idx}>{val.text}</Div>;
        })}
      </Div>
    </>
  );
}

export default App;
