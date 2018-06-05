import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div>
        <nav className="ink-navigation">
          <ul className="menu horizontal black">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/patterns">Patterns</Link>
            </li>
            <li>
              <Link to="/wips">WIPs</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
};

export default Home