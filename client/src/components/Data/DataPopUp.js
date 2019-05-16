import React, { Component } from 'react'
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import EmissionsDataCard from "./EmissionsDataCard"

export default class DataPopUp extends Component {

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
      this.props.children.props.clicked()
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  button = () => (
    <Button className='modal-button modal-style' onClick={this.handleShow} style={{ backgroundColor: '#295135' }}>Get the graph
    </Button>
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

    return (
      <div>
        {showButton}
        <Modal
          size='lg'
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ width: '50vw', height: 'auto' }}>
            {this.props.children}
            <hr></hr>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
