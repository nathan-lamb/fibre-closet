import * as React from 'react';
import './App.css';


class App extends React.Component {
  public render() {
    return (
      <div className="wrap">
        <div className="top-menu">
          <nav className="ink-navigation ink-grid">
            <ul className="menu horizontal black">
              <li className="active">
                <a href="#">Home</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="example">
          <div className="ink-grid">
              <div className="column-group horizontal-gutters">
                  <div className="all-33">
                    <div className="column">
                      Fibre Inventory
                    </div>
                  </div>
                  <div className="all-33">
                    <div className="column">
                      Patterns
                    </div>
                  </div>
                  <div className="all-33">
                    <div className="column">
                      WIPs
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
