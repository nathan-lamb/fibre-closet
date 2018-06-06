import * as React from 'react'

const FilterMenu = () => {
  return (
      <div className="ink-navigation filter-menu">
        <ul className="menu horizontal">
          {/*<div className="filter-title all-100" >*/}
            {/*<li className="align-center"><div>Filter</div></li>*/}
          {/*</div>*/}
          <div className="ink-dropdown all-20" data-target="#weight-dropdown" data-dismiss-after="0.5">
            <span>Weight</span>
            <span className="push-right">&#9660;</span>
          </div>
          <ul id="weight-dropdown" className="dropdown-menu">
            <li className="ink-label"><a>2ply</a></li>
            <li className="ink-label"><a>4ply</a></li>
            <li className="ink-label"><a>8ply</a></li>
          </ul>
          <div className="ink-dropdown all-20" data-target="#fibreType-dropdown" data-dismiss-after="0.5">
            <span>Type of Fibre</span>
            <span className="push-right">&#9660;</span>
          </div>
          <ul id="fibreType-dropdown" className="dropdown-menu">
            <li className="ink-label"><a>Merino</a></li>
            <li className="ink-label"><a>Alpaca</a></li>
            <li className="ink-label"><a>Mohair</a></li>
          </ul>
        </ul>
      </div>
  )
};

export default FilterMenu