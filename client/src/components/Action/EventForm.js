import React, { Component } from 'react'

export default class EventForm extends Component {

  state = {
    name: '',
    date: '',
    time: '',
    venue: '',
    address: '',
    link: ''
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // axios
    //   .post(
    //     "http://localhost:5000/XXXXXX",
    //     {
    //       name: this.state.name,
    //       date: this.state.date,
    //       time: this.state.time, 
    //       venue: this.state.venue,
    //       address: this.state.address,
    //       link: this.state.link      
    //     }    
    //   )
    //   .then(() => {
    //     this.props.getData();
    //     this.setState({ name: '',
    //                     date: '',
    //                     time: '',
    //                     venue: '',
    //                     address: '',
    //                     link: '' });
    // //   });
  };

  render() {
    return (
      <div>

        <h2>Add Your own event</h2>
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">

              <label>Event Name: </label>
              <input
                className='form-control'
                value={this.state.name}
                onChange={this.handleChange}
                name='name'
                type="text" />
            </div>

            <div className="form-group">
              <label>Date: </label>
              <input
                className='form-control'
                value={this.state.date}
                onChange={this.handleChange}
                name='date'
                type="text" />
            </div>

            <div className="form-group">
              <label>Start Time:</label>
              <input
                className='form-control'
                value={this.state.time}
                onChange={this.handleChange}
                type="time"
                name="time" />
            </div>

            <div className="form-group">
              <label>Venue/Place: </label>
              <input
                className='form-control'
                value={this.state.time}
                onChange={this.handleChange}
                type="text"
                name="venue" />
            </div>

            <div className="form-group">
              <label>Address: </label>
              <input
                className='form-control'
                value={this.state.address}
                onChange={this.handleChange}
                type="text"
                name='address' />
            </div>

            <div className="form-group">
              <label>Link to Event: </label>
              <input
                className='form-control'
                value={this.state.link}
                onChange={this.handleChange}
                type="text"
                name='link' />
            </div>

            <input
              className="btn btn-primary"
              type="submit"
              value="Add Event"
            />

          </form>
        </div>



      </div>
    )
  }
}
