import React from 'react';

import Phone from '../core/Phone';
import ModalBox from '../core/Modal';
import Button from '../core/Button/Button';
import Ref from '../core/Ref';

import '../SignIn/style.css';

const SignIn = props => {
  const {
    modalState,
    // handleModalEvent,
    handleModalState,
    // showSignin,
    // handleCloseSignin,
    // handleShowSignin,
    // handleShowLogin,
    // handleShowOtpModal,
  } = props;

  const head = <h1 className="sign-in-h1"> Sign UP </h1>;

  return (
    <ModalBox
      handleClose={() =>
        handleModalState({
          ...modalState,
          isOtpModal: false,
          isSignup: false,
          isLogin: false,
        })
      }
      handleShow={() =>
        handleModalState({
          ...modalState,
          isOtpModal: false,
          isLogin: false,
          isSignup: true,
        })
      }
      // handleShow={handleModalEvent}
      show={modalState.isSignup}
      // show={showSignin}
      // handleClose={handleCloseSignin}
      // handleShow={handleShowSignin}
      head={head}
    >
      <h3 className="sign-in-h3"> Sign Up with your<br /> mobile number </h3>
      <Phone />
      <Button
        text=" SEND OTP "
        class="OtpButton"
        onClick={() =>
          handleModalState({ ...modalState, isOtpModal: true, isSignup: false })
        }
      />
      <h5 className="head5"> Already a Member ?
        <Ref
          class="login-link"
          onClick={() =>
            handleModalState({
              ...modalState,
              isOtpModal: false,
              isLogin: true,
              isSignup: false,
            })
          }
          text="Login Now"
        />
      </h5>

    </ModalBox>
  );
};

export default SignIn;
