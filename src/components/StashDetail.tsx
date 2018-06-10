import * as React from 'react'
import {DbStash} from "./Stash";

interface IStashDetailProps {
  stash: DbStash
}

class StashDetail extends React.Component<IStashDetailProps> {
  constructor(props: IStashDetailProps) {
    super(props);
  }

  render () {
    return (
      <div className="column-group gutters">
        <div className="all-50">
          <p>Image</p>
        </div>
        <div className="all-50">
          <p>Yarn: {this.props.stash.yarn}</p>
          <p>Brand: </p>
          <p>Quantity: </p>
          <p>Colourway: </p>
          <p>Nearest Colour: </p>
          <p>Weight: </p>
          <p>Fibre Content: </p>
        </div>
      </div>
  )}
}

export default StashDetail