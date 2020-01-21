import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  const { todos } = props;
  return (
    <div>
      <input
        type='text'
        placeholder='Add Todo'
      />
        <ul>
          {todos.map(item => (
            <li key={item.id}>
              <Todo todo={item} />
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TodoList;