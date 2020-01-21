
import { connect } from 'react-redux';

import * as components from './components/Todo';
import * as components from './components/TodoList';

import { addTodo } from './actions/addTodo';
import { toggleTodo } from './actions/toggleTodo';

export const TodoList = connect(
  function mapStateToProps(state){
    return{ todos: state }
  },
  function mapDispatchToProps(dispatch){
    return{
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    }
  }
)(components.TodoList)