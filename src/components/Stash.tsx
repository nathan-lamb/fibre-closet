import * as React from 'react';

import AddStashForm from './AddStashForm'
// import FilterMenu from './FilterMenu'
import StashThumb from './StashThumb'
import StashDetail from './StashDetail'

const Stash = () => {
  return (
      <div>
        <div className="column all-100">
          <button id="stashFormModal" className="ink-button">
            Add <i className="fas fa-plus-circle" />
          </button>
          <AddStashForm />
        </div>
        <div className="column-group gutters">
            <StashThumb />
            <StashThumb />
            <StashThumb />
            <StashThumb />
        </div>
        <StashDetail />
      </div>
  )
};

export default Stash
;