import * as React from 'react'

const AddStashForm = () => {
  return (
      <form className="ink-form">
        <div className="column-group">
          <div className="name">
            <label id="name">Yarn</label>
            <div className="control">
              <input id="name" type="text" name="name" />
            </div>
          </div>
          <div className="brand">
            <label id="brand">Brand</label>
            <div className="control">
              <input id="brand" type="text" name="brand" />
            </div>
          </div>
          <div className="colourway">
            <label id="colourway">Colourway</label>
            <div className="control">
              <input id="colourway" type="text" name="colourway" />
            </div>
          </div>
          <div className="colour">
            <label id="colour">Nearest Colour</label>
            <div className="control">
              <select id="colour">
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="multi">Multicolour</option>
              </select>
            </div>
          </div>
          <div className="weight">
            <label id="weight">Weight</label>
            <div className="control">
              <select id="weight">
                <option value="lace">Lace</option>
                <option value="fingering">Fingering</option>
                <option value="sport">Sport</option>
                <option value="dk">DK</option>
                <option value="worsted">Worsted</option>
                <option value="bulky">Bulky</option>
                <option value="superbulky">Super Bulky</option>
              </select>
            </div>
          </div>
          <div className="fibreContent">
            <label id="fibreContent">Fibre Content</label>
            <div className="control">
              <select id="fibreContent">
                <option value="alpaca">Alpaca</option>
                <option value="cotton">Cotton</option>
                <option value="merino">Merino</option>
                <option value="nylon">Nylon</option>
                <option value="possum">Possum</option>
              </select>
            </div>
          </div>
          <div className="quantity">
            <label id="quantity">Quantity</label>
            <div className="control">
              <input id="quantity" type="text" name="quantity" placeholder="200m"/>
            </div>
          </div>
        </div>
      </form>
  )
};

export default AddStashForm