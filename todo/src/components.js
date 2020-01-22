import React from 'react';

export function Todo(props){
  const { todo } = props;
  // return item.get('isDone') ? <strike>{item.get('text')}</strike> : <span>{item.get('text')}</span>
  if(todo.isDone){
    return <strike>{todo.text}</strike>
  }else{
    return <span>{todo.text}</span>
  }
}

export function TodoList(props) {
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
  };

  const toggleClick = id => event => toggleTodo(id);

  return (
    <div className='todo'>
      <input
        type='text'
        className='todo_entry'
        placeholder='Add Todo'
        onKeyDown={onSubmit}
      />
        <ul className='todo_list'>
          {todos.map(t => (
            <li key={t.get('id')}
              className='todo_item'
              onClick={toggleClick(t.get('id'))}>
              <Todo todo={t.toJS()} />
            </li>
          ))}
        </ul>
    </div>
  );
}