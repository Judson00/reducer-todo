import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import { TodoList } from './containers';
import reducer from './reducer';

const store = createStore(reducer)

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Todo List</h1>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
