import * as React from 'react';
import { Link } from 'react-router-dom';

import Title from './Title'

class Home extends React.Component {
  public render() {
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
          <Title />
        </div>
    )
  }
}

export default Home