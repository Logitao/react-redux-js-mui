import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.0/node_modules/redux';
import { addTodo, deleteTodo } from './todos.actions';

export class TodoComponent extends Component {
  static propTypes = {
    addTodo: PropTypes.any,
    deleteTodo: PropTypes.any,
    todos: PropTypes.object
  };

  render() {
    return (
      <div>
        {this.props.todos.map((item, index) => (
          <span key={index}>{item.label}</span>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todoItems
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...{
        addTodo: (label, done, key) => addTodo({ label, done, key }),
        deleteTodo: key => deleteTodo(key)
      }
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoComponent);
