import React from 'react';

const Todo = props => {
  const { todo } = props;
  return todo.isDone ? <strike>{todo.text}</strike> : <span>{todo.text}</span>
}

export default Todo;