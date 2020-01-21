import React from 'react';
import { createStore } from 'redux';

import './App.css';
import TodoList from './components/TodoList';
import reducer from './reducer';

const store = createStore(reducer)

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
      <TodoList todos={store.getState()} />
    </div>
  );
}

export default App;
