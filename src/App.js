import React, { Component } from 'react';
import './App.css';
import router from './router'
import {BrowserRouter} from 'react-router-dom'


class App extends Component {

  render() {
    return (
        <div>
          <BrowserRouter>
            {router}
          </BrowserRouter> 
        </div>
    );
  }
}

export default App;