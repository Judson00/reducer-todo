const uniqueId = () => Math.random().toString(34).slice(2);

export const addTodo = text => {
  return{
    type: 'Add_TODO',
    payload: {
      id: uniqueId(),
      idDone: false,
      text: text
    }
  }
}