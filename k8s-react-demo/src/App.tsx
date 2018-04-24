import * as React from 'react';
import './App.css';
import {Hostname} from './Hostname'
import logo from './logo.svg';


class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mat's Kubernetes Demo</h1>
        </header>
        <p className="App-intro">
          Backend Response Hostname: <Hostname />
        </p>
        
      </div>
    );
  }
}

export default App;
