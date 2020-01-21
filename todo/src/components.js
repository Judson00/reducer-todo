import React from 'react';

export const Todo = props => {
  const { item } = props;
  return item.get('isDone') ? <strike>{item.get('text')}</strike> : <span>{item.get('text')}</span>
}

export const TodoList = props => {
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

  const toggleClick = id => event => toggleTodo(id);

  return (
    <div>
      <input
        type='text'
        placeholder='Add Todo'
        onKeyDown={onSubmit}
      />
        <ul>
          {todos.map(item => (
            <li key={item.get('id')}>
              onClick={toggleClick(item.get('id'))}
              <Todo todo={item.toJS()} />
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TodoList;