import React, { Component } from 'react';

import 'antd/dist/antd.css';
import '@fortawesome/fontawesome-pro/css/all.css';

import Routes from './routes';

import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      appName: "REACT",
      home: false
    }
  }

  render() {
    return (
      <div>
          <Routes name={this.state.appName}/>
      </div>
    );
  }
}

export default App;
