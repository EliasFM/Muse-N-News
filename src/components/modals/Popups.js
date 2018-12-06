import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ErrorPopup extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.closeModalCallback();
  }

  render() {
    return (
      <Modal isOpen={this.props.showModal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
          {this.props.error}
          </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={this.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export { ErrorPopup }