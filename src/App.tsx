import * as React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";

import './App.css';

import Navbar from './components/Navbar'
import Title from "./components/Title";

import routes from './routes'

class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <Navbar />
            <Title />
            <div className="ink-grid">
              <div className="column-group">
                {routes.map((route) => (
                    <Route
                      path={route.path}
                      exact={route.exact}
                      title={route.title}
                      component={route.object}
                    />
                ))}
              </div>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
