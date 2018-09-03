import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleVisibilityTodo } from './todos.actions';
import { withRouter } from 'react-router';
import TodoItem from './TodoItem';

import {
    IconButton,
    InputAdornment,
    InputLabel,
    Input,
    FormControl,
    Typography
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    items: {
        flex: 1,
        textAlign: 'center'
    }
});

class TodoComponent extends Component {
    static propTypes = {
        addTodo: PropTypes.any,
        deleteTodo: PropTypes.any,
        toggleTodo: PropTypes.any,
        todos: PropTypes.array,
        classes: PropTypes.object
    };

    state = {
        label: '',
        key: 0
    };

    onChange = ({ target: { value: value } }) =>
        this.setState({
            label: value
        });

    addTodo = () =>
        this.props.addTodo({
            label: this.state.label,
            done: false,
            key: this.props.todos.length + 1
        });

    deleteTodo = () => this.props.deleteTodo(this.props.todos.length);

    handle = a => () => this.props.toggleTodo(a);
    render() {
        const { addTodo, onChange } = this;

        return (
            <div className={this.props.classes.root}>
                <Typography variant="display3">Hello Webpack</Typography>
                <FormControl>
                    <InputLabel htmlFor="label">Todo</InputLabel>
                    <Input
                        id="label"
                        value={this.state.label}
                        onChange={onChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Add todo"
                                    onClick={addTodo}
                                >
                                    <AddCircleIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                {this.props.todos.map(({ label, done, key }) => (
                    <TodoItem
                        key={key}
                        id={key}
                        label={label}
                        done={done}
                        handle={this.handle}
                    />
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
    deleteTodo: key => dispatch(deleteTodo(key)),
    toggleTodo: key => dispatch(toggleVisibilityTodo(key))
});

export default withStyles(styles)(
    withRouter(
        connect(
            mapStateToProps,
            mapDispatchToProps
        )(TodoComponent)
    )
);
