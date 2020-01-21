import React from 'react';

import Todo from './Todo';


const TodoList = props => {
  const { todos, toggleTodo, addTodo } = props;

  const onSubmit = event => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0

    if(isEnterKey && isLongEnough){
      input.value = '';
      addTodo(text);
    }
  }

  const { todos } = props;
  return (
    <div>
      <input
        type='text'
        placeholder='Add Todo'
      />
        <ul>
          {todos.map(item => (
            <li key={item.get('id')}>
              <Todo todo={item} />
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TodoList;