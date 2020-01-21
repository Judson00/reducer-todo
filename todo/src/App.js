import React from 'react';

import './App.css';
import TodoList from './components/TodoList';

const dummyTodos = [
  { 
    id: 0, 
    isDone: true, 
    text: 'make components' 
  },
  { 
    id: 1, 
    isDone: false, 
    text: 'design actions' 
  },
  { 
    id: 2, 
    isDone: false, 
    text: 'implememnt reducer' 
  },
  { 
    id: 3, 
    isDone: false, 
    text: 'connect components' 
  }
]

const App = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={dummyTodos} />
    </div>
  );
}

export default App;
