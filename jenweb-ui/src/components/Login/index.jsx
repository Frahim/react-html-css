import React from 'react';

import Phone from '../core/Phone';
import ModalBox from '../core/Modal';
import Button from '../core/Button/Button';
import Ref from '../core/Ref';

import '../Login/style.css';

const Login = props => {
  const {
    modalState,
    handleModalState,
    // handleModalEvent,
    // handleShow,
    // showLogin,
    // handleCloseLogin,
    // handleShowLogin,
    // handleShowSignin,
    // handleShowOtpModal,
  } = props;

  return (
    <ModalBox
      handleClose={() =>
        handleModalState({
          ...modalState,
          isOtpModal: false,
          isLogin: false,
          isSignup: false,
        })
      }
      handleShow={() =>
        handleModalState({
          ...modalState,
          isOtpModal: false,
          isLogin: true,
          isSignup: false,
        })
      }
      // handleShow={handleModalEvent}
      show={modalState.isLogin}
    // show={showLogin}
    // handleClose={handleCloseLogin}
    // handleShow={handleShowLogin}
    >
      <h3 className="login-h3"> Login with your </h3>
      <h3 className="login-h3"> mobile number </h3>
      <Phone />
      <Button
        text=" SEND OTP "
        class="OtpButton"
        onClick={() =>
          handleModalState({
            ...modalState,
            isOtpModal: true,
            isLogin: false,
          })
        }
      />

      <h3 className="head3"> Not a member ? </h3>
      {/* onClick={handleShowSignin} */}
      <Ref
        class="login-link"
        onClick={() =>
          handleModalState({
            ...modalState,
            isOtpModal: false,
            isLogin: false,
            isSignup: true,
          })
        }
        // onClick={() => handleModalEvent('isSignup')}
        text="Sign in Now"
      />
    </ModalBox>
  );
};

export default Login;
