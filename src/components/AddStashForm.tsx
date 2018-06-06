import * as React from 'react'

const AddStashForm = () => {
  return (
      <form className="ink-form">
        <div className="column-group">
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
          <div className="fibre">
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
        </div>
      </form>
  )
};

export default AddStashForm