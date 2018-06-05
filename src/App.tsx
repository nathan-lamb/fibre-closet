import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="wrap">
        <div className="top-menu">
          <nav className="ink-navigation ink-grid">
            <ul className="menu horizontal black">
              <li className="header active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Inventory</a>
              </li>
              <li>
                <a href="#">Patterns</a>
              </li>
              <li>
                <a href="#">WIPs</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="example">
          <div className="ink-grid">
            FO Gallery
          </div>
        </div>
      </div>
    );
  }
}

export default App;
