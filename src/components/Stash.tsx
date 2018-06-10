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

export interface StashThumbnail {
  id: number,
  yarn?: string
}

interface StashState {
  stash: DbStash | null,
  ids: StashThumbnail[] | null
}

class Stash extends React.Component<{}, StashState> {
  state: StashState = {
    stash: null,
    ids: null,
  }

  async componentDidMount () {
    const response = await fetch('/hi')
    const stash = await response.json()
    this.setState({stash})

    const responseStashIds = await fetch('/stash')
    const ids = await responseStashIds.json()
    const idsArray = []

    for (const i of ids) {
      idsArray.push(ids[i].id)
    }
    this.setState({ids: idsArray})
  }

  render() {
    const {stash, ids} = this.state;
    if (stash == null || ids == null) {
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
            {ids.map((id) => (
              <StashThumb />
            ))}
          </div>
          <StashDetail stash={stash}/>
        </div>
    )
  }
}

export default Stash