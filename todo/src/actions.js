const uniqueId = () => Math.random().toString(34).slice(2);

export function addTodo(text){
  return{
    type: 'Add_TODO',
    payload: {
      id: uniqueId(),
      isDone: false,
      text: text
    }
  };
}


export function toggleTodo(id){
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
}