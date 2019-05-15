import React, { Component } from 'react'

export default class EmissionsUserSelection extends Component {
  /* state = {
    userSelectionEU: null
  } */

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="user-selection-form2">
        <h4>Greenhouse gas emissions per EU capita</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <select value={this.props.country} onChange={(e) => this.props.changed(e)} className="select" name="country">
              <option value="">Choose a country</option>
              <option value="Austria">Austria</option>
              <option value="Belgium">Belgium</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Germany">Germany</option>
              <option value="Denmark">Denmark</option>
              <option value="Estonia">Estonia</option>
              <option value="Greece">Greece</option>
              <option value="Spain">Spain</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Croatia">Croatia</option>
              <option value="Hungary">Hungary</option>
              <option value="Ireland">Ireland</option>
              <option value="Iceland">Iceland</option>
              <option value="Italy">Italy</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Latvia">Latvia</option>
              <option value="Malta">Malta</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Norway">Norway</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Sweden">Sweden</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Slovakia">Slovakia</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>

            <br />

            <label>
              Display EU average
          <input
                name="EUaverage"
                type="checkbox"
                /* checked={this.state.EUaverage}
                onChange={this.handleInputChange} */ />
            </label>

          </div>
          <br />
          <div>
            <label className="inp">
              <input value={this.props.startYearEU} type="text" id="inp" name='startYearEU' onChange={(e) => this.props.changed(e)} />
              <span className="label">Start year</span>
              <span className="border"></span>
            </label>
          </div>
          <br />
          <div><label className="inp">
            <input value={this.props.endYearEU} onChange={(e) => this.props.changed(e)} type="text" id="inp" name='endYearEU' />
            <span className="label">End year</span>
            <span className="border"></span>
          </label></div>
          <br />
          <button className='modal-button modal-style' style={{ backgroundColor: '#295135' }}>Get the graph</button>
        </form>
      </div >
    )
  }
}