
import { List, Map } from 'immutable';

const init = List([]);

export default function(todos=init, action) {
  switch(action.type){
    case "ADD_TODO":
      return todos.push(Map(action.payload));

    case 'TOGGLE_TODO':
      return todos.map(item => {
        return item.get('id') === action.payload ? item.update('isDone', isDone => !isDone) : item
      })

    default:
      return todos;
  }
}