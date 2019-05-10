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
          {this.props.title}
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {this.props.children}
            <hr></hr>

          </Modal.Body>
        </Modal>


      </div>
    )
  }
}
