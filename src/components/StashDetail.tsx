import * as React from 'react'

class StashDetail extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      yarn: " ",
    }
  }
  render () {
  return (
      <div className="column-group gutters">
        <div className="all-50">
          Image
        </div>
        <div className="all-50">
          <p>Yarn: </p>
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