import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from './todos.actions';

export class TodoComponent extends Component {
  static propTypes = {
    addTodo: PropTypes.any,
    deleteTodo: PropTypes.any,
    todos: PropTypes.array
  };

  state = {
    label: '',
    key: 0
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      label: value
    });
  };

  addTodo = () => {
    this.props.addTodo({
      label: this.state.label,
      done: false,
      key: this.props.todos.length + 1
    });
  };

  deleteTodo = () => {
    this.props.deleteTodo(this.props.todos.length);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="label"
          onChange={this.onChange}
          value={this.state.label}
        />
        {console.log(this.state)}

        <button onClick={this.addTodo}>Add</button>
        <button onClick={this.deleteTodo}>Remove</button>
        {this.props.todos.map((item, index) => (
          <div key={index}>
            <span key={index}>{item.label}</span>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todoItems
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  deleteTodo: key => dispatch(deleteTodo(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoComponent);
