import * as React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import './App.css';

import routes from './routes'

class App extends React.Component {
  public render() {
    return (
        <Router>
          <div>
            {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.title}
                />
            ))}
          </div>
        </Router>
    );
  }
}

export default App;
