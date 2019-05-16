import React, { Component } from 'react'
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'

export default class DropDown extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };

    this.handleShow = () => {

      if (this.props.protected) {
        this.setState({ show: this.props.user !== null })
      } else {
        this.setState({ show: true })

      }
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  button = () => (
    <Button className='modal-button modal-style' onClick={this.handleShow}
      style={{ backgroundColor: '#295135' }} >
      {this.props.title}
    </Button>
  );

  tooltip = (
    <Tooltip id={`tooltip-'bottom'`}>
      You Need To Be a Logged-in User to Add Events!
</Tooltip>
  );

  overlayTrigger = (
    <OverlayTrigger
      key={'bottom'}
      placement={'bottom'}
      overlay={this.tooltip}
    >
      {this.button()}
    </OverlayTrigger>
  );

  render() {

    let showButton = this.button()
    if (this.props.protected && this.props.user === null) {
      showButton = this.overlayTrigger
    }

    return (
      <div>

        {showButton}

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
