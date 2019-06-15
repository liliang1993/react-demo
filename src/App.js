import React, { Component } from "react";
// import logo from './logo.svg';
import "@/style/reset.less";
import "./App.css";
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { connect } from "react-redux";
import BasicLayout from "layout/BasicLayout.js";

function mapStateToProps(state) {
  console.log("state", state);
  return {
    tiger: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // PayIncrease: () => dispatch({ type: '涨工资' }),
    // PayDecrease: () => dispatch({ type: '扣工资'}),
  };
}

// class pageA extends Component {
//   componentDidMount() {
//     console.log('props', this.props)
//   }
//   render() {
//     // const { PayIncrease, PayDecrease } = this.props;
//     return (
//       <div className="pageA">
//           <h2>当月工资为{this.props.tiger}</h2>
//       </div>
//       // <div className="App">
//       //   <Button type="primary">Button</Button>
//       // </div>
//     );
//   }
// }

// let _pageA = connect(mapStateToProps, mapDispatchToProps)(pageA);

// const pageB = () => (
//   <div>
//     页面2
//   </div>
// );

// const pageC = () => (
//   <div>
//     页面3
//   </div>
// );

// const pageD = () => (
//   <div>
//     页面4
//   </div>
// );

// const BasicLayout = () => (
//   <div>
//     <header>
//       <ul>
//         <li>
//           <Link to='/pagea'>pagea</Link>
//           <Link to='/pageb'>pagec</Link>
//           <Link to='/pagec'>paged</Link>
//           <Link to='/paged'>pagee</Link>
//         </li>
//       </ul>
//     </header>
//     <div>
//         <Route path='/pagea' exact component={_pageA}></Route>
//         <Route path='/pageb' component={pageB}></Route>
//         <Route path='/pagec' exact component={pageC}></Route>
//         <Route path='/paged' exact component={pageD}></Route>
//     </div>
//   </div>
// );

class App extends Component {
  render() {
    return (
      <div>
        <BasicLayout />
      </div>
      // <div className="App">
      //   <Button type="primary">Button</Button>
      // </div>
    );
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
