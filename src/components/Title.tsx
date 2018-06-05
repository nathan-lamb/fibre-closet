import * as React from 'react';
import {Route} from "react-router";
import routes from "../routes";

const Title = () => {
  return (
    <div className="ink-grid">
      <div className="column-group">
        {routes.map((route, index) => (
            <Route
                component={route.title}
                exact={route.exact}
                key={index}
                path={route.path}
            />
        ))}
      </div>
    </div>
  )
};

export default Title