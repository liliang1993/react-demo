import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Button from 'antd/lib/button';
const pageA = () => (
  <div>
    页面1
  </div>
);

const pageB = () => (
  <div>
    页面2
  </div>
);

const pageC = () => (
  <div>
    页面3
  </div>
);

const pageD = () => (
  <div>
    页面4
  </div>
);

const BasicLayout = () => (
  <div class='basics'>
    <header>
      <ul>
        <li>
          <Link to='/pagea'>pagea</Link>
          <Link to='/pageb'>pagec</Link>
          <Link to='/pagec'>paged</Link>
          <Link to='/paged'>pagee</Link>
        </li>
      </ul>
    </header>
    <div class='container'>
        <Route path='/pagea' exact component={pageA}></Route>
        <Route path='/pageb' component={pageB}></Route>
        <Route path='/pagec' exact component={pageC}></Route>
        <Route path='/paged' exact component={pageD}></Route>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      // <Router>
      //   <BasicLayout></BasicLayout>
      // </Router>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
