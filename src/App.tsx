import * as React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import './App.css';

import Home from './components/Home'
import Inventory from './components/Inventory'

class App extends React.Component {
  public render() {
    return (
        <Router>
          <div>
            <Route path="/" component={Home} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/patterns" />
            <Route path="/wips" />
          </div>
        </Router>
    );
  }
}

export default App;
