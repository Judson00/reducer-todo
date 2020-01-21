import React from 'react';

const Todo = props => {
  const { item } = props;
  return item.get('isDone') ? <strike>{item.get('text')}</strike> : <span>{item.get('text')}</span>
}

export default Todo;