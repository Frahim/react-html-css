import React, { useState } from 'react';

import Block from '../Block/Blocks';
// import ModalBox from "components/core/Modal";
import HomeText from '../HomeText';

import Logo from '../../static/Logo.png';

import Login from '../Login';
import SignIn from '../SignIn';
import OtpModal from '../OtpModal';

import Button from '../core/Button/Button';
import Ref from '../core/Ref';

// my import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../HomeText/style.css';
const HomeController = () => {
  const [modalState, setModalState] = useState({
    isLogin: false,
    isSignup: false,
    isOtpModal: false,
  });
  const handleModalState = modalData => setModalState(modalData);
  const handleModalEvent = modalType => {
    console.log(
      'in The handleModal Event',
      modalType,
      modalState,
      modalState[modalType],
    );
    setModalState({ ...modalState, [modalType]: !modalState[modalType] });
  };

  // const [, setshowLogin] = useState(false);
  // const handleCloseLogin = () => setshowLogin(false);
  // const handleShowLogin = () => setshowLogin(true);

  // const [, setshowSignin] = useState(false);
  // const handleCloseSignin = () => setshowSignin(false);
  // const handleShowSignin = () => setshowSignin(true);

  // const [, setshowOtpModal] = useState(false);
  // const handleCloseOtpModal = () => setshowOtpModal(false);
  // const handleShowOtpModal = () => setshowOtpModal(true);

  return (
    <div className="wrwpper">
      <Container fluid>
        <Row className="justify-content-md-center">

          <Col md={12} sm={12} lg={{ span: 5, offset: 1, order: 'first', }}>

            <Row>
              <Col md={{ span: 12, order: 12 }} lg={12} className="logoSec d-none d-lg-block"> <img src={Logo} className="App-logo" alt="logo" /> </Col>
              <Col md={{ span: 12, order: 1, }} lg={12}>
                <Col md={{ span: 12 }} lg={12} className="banerText">
                  <h2 className="banerTtext">Knowledge & Solutions <br />for your body</h2>
                  <h3 className="bannerMtext">From experienced doctors of <br />physical therapy</h3>
                  <p className="banerBtext">Learn about the body, Find solutions to relieve pain, Improve mobility,<br /> Understand proper movement, Optimize your health, Find community</p>
                </Col>
                <Col xs={12} md={12} className="banerbtn">
                  <Button
                    onClick={() => handleModalEvent('isSignup')}
                    text="LETS GET STARTED"
                    class="sign-up-button"
                  />
                  <h5 className="head5"> Already a Member ?
                    <Ref
                      class="login-link"
                      onClick={() => handleModalEvent('isLogin')}
                      text="Login Now"
                    />
                  </h5>


                </Col>
              </Col>
            </Row>
          </Col>

          <HomeText
            // handleShowLogin={handleShowLogin}
            // handleShowSignin={handleShowSignin}
            handleModalEvent={handleModalEvent}
          />

          <Login
            handleModalState={handleModalState}
            handleModalEvent={handleModalEvent}
            modalState={modalState}
          // showLogin={showLogin}
          // handleCloseLogin={handleCloseLogin}
          // handleShowLogin={handleShowLogin}
          // handleShowSignin={handleShowSignin}
          // handleShowOtpModal={handleShowOtpModal}
          />

          <SignIn
            handleModalState={handleModalState}
            handleModalEvent={handleModalEvent}
            modalState={modalState}
          // showSignin={showSignin}
          // handleCloseSignin={handleCloseSignin}
          // handleShowSignin={handleShowSignin}
          // handleShowLogin={handleShowLogin}
          // handleShowOtpModal={handleShowOtpModal}
          />

          <OtpModal
            handleModalState={handleModalState}
            handleModalEvent={handleModalEvent}
            modalState={modalState}
          // showOtpModal={showOtpModal}
          // handleCloseOtpModal={handleCloseOtpModal}
          // handleShowOtpModal={handleShowOtpModal}
          />

        </Row>
      </Container>
    </div>

  );
};

export default HomeController;
