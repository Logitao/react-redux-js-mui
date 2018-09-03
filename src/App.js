import React, { Component } from 'react';
import Todo from './todos/Todo';
import { withRouter } from 'react-router';
class App extends Component {
    render() {
        return (
            <div>
                <Todo />
            </div>
        );
    }
}
export default withRouter(App);
