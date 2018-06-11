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
          <p>Brand: {this.props.stash.brand}</p>
          <p>Quantity: {this.props.stash.quantity}</p>
          <p>Colourway: {this.props.stash.colourway}</p>
          <p>Nearest Colour: {this.props.stash.nearest_colour}</p>
          <p>Weight: {this.props.stash.weight}</p>
          <p>Fibre Content: {this.props.stash.fibre_content}</p>
        </div>
      </div>
  )}
}

export default StashDetail