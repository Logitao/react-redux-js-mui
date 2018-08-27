import React, { Component } from 'react';
import TodoComponent from './todos/todos.component';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Webpack</h1>
        <TodoComponent />
      </div>
    );
  }
}
export default App;
