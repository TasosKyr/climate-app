import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class DropDown extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  render() {
    return (
      <div>

        <Button className='modal-button' onClick={this.handleShow}>
          Check out more Events Here
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Check out These Climate Events
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Event Name</h3>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
            </p>
            <button className='link-button'>Here is link to more info</button>
            <hr></hr>
            <h3>Event Name</h3>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
            </p>
            <button className='link-button'>Here is link to more info</button>
            <hr></hr>
            <h3>Event Name</h3>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
            </p>
            <button className='link-button'>Here is link to more info</button>
            <hr></hr>
            <h3>Event Name</h3>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
            </p>
            <button className='link-button'>Here is link to more info</button>
            <hr></hr>
            <h3>Event Name</h3>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
            </p>
            <button className='link-button'>Here is link to more info</button>
            <hr></hr>
          </Modal.Body>
        </Modal>


      </div>
    )
  }
}
