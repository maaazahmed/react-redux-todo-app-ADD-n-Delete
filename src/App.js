import React, { Component } from 'react';
import MainComponent from './components';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <MainComponent/>
      </Provider>
    );
  }
}

export default App;
