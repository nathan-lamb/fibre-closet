import * as React from 'react';

const Home = () => {
  return (
      <div>
        <nav className="ink-navigation">
          <ul className="menu horizontal black">
            <li><a href="#">Home</a></li>
            <li><a href="#">Inventory</a></li>
            <li><a href="#">Patterns</a></li>
            <li><a href="#">WIPs</a></li>
          </ul>
        </nav>
      </div>
  )
};

export default Home