import React, { Component } from 'react';
import AddTodo from './components/addtodo';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <AddTodo/>
      </Provider>
    );
  }
}

export default App;
