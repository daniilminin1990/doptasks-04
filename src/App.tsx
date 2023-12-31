import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SuperButton } from './components/SuperButton';
import { SuperTodoList } from './components/SuperTodoList';

function App() {
  const tasks = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
  ]

  return (
    <div className="App">
      <SuperButton onClick={() => { }} color={'red'}>Red Button</SuperButton>
      <SuperButton onClick={() => { }} color={'secondary'} disabled={true}>Secondary disabled Button</SuperButton>
      <SuperButton onClick={() => { }} color={'secondary'} >Secondary disabled Button</SuperButton>
      <SuperButton onClick={() => { }}>Default Button</SuperButton>


      <SuperTodoList tasks={tasks}>
        <SuperButton onClick={() => { }} color={'red'}>Red Button</SuperButton>
        <SuperButton onClick={() => { }} color={'secondary'} disabled={true}>Secondary disabled Button</SuperButton>
        <SuperButton onClick={() => { }} color={'secondary'} >Secondary disabled Button</SuperButton>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta sunt ut nisi fugiat. Illum ut atque provident asperiores debitis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta sunt ut nisi fugiat. Illum ut atque provident asperiores debitis?</p>
        <input type="text" />
        <input type="text" />
      </SuperTodoList>
      <SuperTodoList tasks={tasks}>
        <SuperButton onClick={() => { }} color={'secondary'} >Secondary disabled Button</SuperButton>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta sunt ut nisi fugiat. Illum ut atque provident asperiores debitis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta sunt ut nisi fugiat. Illum ut atque provident asperiores debitis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta sunt ut nisi fugiat. Illum ut atque provident asperiores debitis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta sunt ut nisi fugiat. Illum ut atque provident asperiores debitis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta sunt ut nisi fugiat. Illum ut atque provident asperiores debitis?</p>
        <input type="text" />
      </SuperTodoList>
      <SuperTodoList tasks={tasks}>
        <SuperButton onClick={() => { }} color={'secondary'} >Secondary Button</SuperButton>
        <SuperButton onClick={() => { }} color={'secondary'} >Secondary Button</SuperButton>
        <SuperButton onClick={() => { }} color={'secondary'} >Secondary Button</SuperButton>
        <SuperButton onClick={() => { }} color={'secondary'} >Secondary Button</SuperButton>
        <SuperButton onClick={() => { }} color={'secondary'} >Secondary Button</SuperButton>
        <SuperButton onClick={() => { }} color={'secondary'} >Secondary Button</SuperButton>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dicta sunt ut nisi fugiat. Illum ut atque provident asperiores debitis?</p>
      </SuperTodoList>
    </div>
  );
}

export default App;
