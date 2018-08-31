import React, { Component } from 'react';
import Todo from './todos/Todo';
import { withRouter } from 'react-router';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Webpack</h1>
        <Todo />
      </div>
    );
  }
}
export default withRouter(App);
