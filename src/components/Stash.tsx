import * as React from 'react';

import AddStashForm from './AddStashForm'
// import FilterMenu from './FilterMenu'

const Stash = () => {
  return (
      <div className="column all-100">
        <button id="stashFormModal" className="ink-button">
          Add <i className="fas fa-plus-circle" />
        </button>
        <AddStashForm />
      </div>
  )
};

export default Stash
