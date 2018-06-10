import * as React from 'react';

import AddStashForm from './AddStashForm'
import StashThumb from './StashThumb'
import StashDetail from './StashDetail'

export interface DbStash {
  id: number,
  yarn?: string,
  brand?: string,
  quantity?: string,
  colourway?: string,
  nearest_colour?: string,
  weight?: string,
  fibre_content?: string
}

interface StashState {
  stash: DbStash | null
}

class Stash extends React.Component<{}, StashState> {
  state = {
    stash: null,
  }

  async componentDidMount () {
    const response = await fetch('/hi')
    const stash = await response.json()

    this.setState({stash})
  }

  render() {
    const {stash} = this.state;
    if (stash == null) {
      return null
    }

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
          <StashDetail stash={stash}/>
        </div>
    )
  }
}

export default Stash