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
            <div className="control-group">
                <p className="label">Please choose the nearest colour/s</p>
                <ul className="control">
                  <li><input type="checkbox" id="blue" value="blue" name="blue"/><label id="blue">blue</label></li>
                </ul>
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