import React from 'react';
import { Modal } from 'react-bootstrap';

// import Ref from "../Ref";

import '../Modal/style.css';

const ModalBox = props => {
  // handleShow was also used
  const { show, handleClose, head } = props;

  return (
    <Modal
      // className = "container"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>{head}</Modal.Header>
      <Modal.Body className="Modal-body" closeButton>
        {props.children}
      </Modal.Body>
      {/* <Modal.Footer>
            <h3> Already a member ? </h3>
            <Ref class="login-link" onClick={handleShow} text="Login Now"/>
          </Modal.Footer>   */}
    </Modal>
  );
};

export default ModalBox;
