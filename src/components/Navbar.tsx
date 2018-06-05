import * as React from 'react';
import {Link} from "react-router-dom";
import routes from "../routes";

const Navbar = () => {
  return (
      <div>
        <nav className="ink-navigation">
          <ul className="menu horizontal black">
            {routes.map((route) => (
                <li>
                  <Link to={route.path}>{route.component}</Link>
                </li>
            ))}
          </ul>
        </nav>
      </div>
  )
};

export default Navbar