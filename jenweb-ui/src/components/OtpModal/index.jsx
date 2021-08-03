import React, { useState } from 'react';

import ModalBox from '../core/Modal';
import Button from '../core/Button/Button';
import Ref from '../core/Ref';
// import FitnessOptions from 'components/FitnessOptions/FitnessOptions';

import '../OtpModal/style.css';

const OtpModal = props => {
  //  handleModalEvent was also included
  const { modalState, handleModalState } = props;

  const [otp, setOtp] = useState(new Array(4).fill(''));

  // This code was used for disabling the input when input is not filled
  // const [ , setshowFitnessOptions] = useState(false);
  // const handleShowFitnessOptions = () => setshowFitnessOptions(true);
  // const handleCloseFitnessOptions = () => setshowFitnessOptions(false);

  // let input = document.querySelector(".otp-field");
  // let button = document.querySelector(".verify-button");

  // button.disabled = true; //setting button state to disabled

  // const HandleOtpInput= () => {
  //     if (document.querySelector(".otp-field").value === "") {
  //         button.disabled = true; //button remains disabled
  //     } else {
  //         button.disabled = false; //button is enabled
  //     }
  // }

  // input.addEventListener("change", HandleOtpInput);

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // To focus on the next input box
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleOtpSubmit = () => {
    // This code was for verifying the OTP using firebase
    //     let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    //     let number = '+917976158034';
    //     firebase.auth.signInWithPhoneNumber(number,recaptcha).then( function(evt) {
    //         let code = prompt('Enter The OTP :-','');
    //         if (code == null) return;
    //         evt.confirm(code).then( function(result) {
    //             console.log(result.user, 'user');

    //         }).catch((error) => {
    //             console.log(error);
    //         })
    //     })

    alert('Entered OTP is : ' + otp);
    //     document.getElementsByClassName('otp-field').defaultValue = "0";
  };

  const handleOtpResend = () => {
    alert(' Resending the OTP !!! ');
  };

  return (
    <div>
      <ModalBox
        show={modalState.isOtpModal}
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
            isOtpModal: true,
            isLogin: false,
            isSignup: false,
          })
        }
        // handleShow={handleModalEvent}
        // show={showOtpModal}
        // handleClose={handleCloseOtpModal}
        // handleShow={handleShowOtpModal}
      >
        <h3> Enter The Verification Code </h3>
        <h3> Sent on Your Mobile Number </h3>

        {otp.map((data, index) => {
          return (
            <input
              className="otp-field"
              type="text"
              name="otp"
              placeholder="XXXX"
              maxLength="1"
              key={index}
              value={data}
              onChange={evt => handleOtpChange(evt.target, index)}
              onFocus={evt => evt.target.select()}
            />
          );
        })}

        {/* <button 
                    className="clear-otp-button" 
                    onClick={evt => setOtp([...otp.map(v => "")])} >
                    Clear 
                </button>  */}

        <Button class="verify-button" text="VERIFY" onClick={handleOtpSubmit} />

        <h5> Did Not Receive The Code ? </h5>
        <Ref class="Resend-otp" text="Resend" onClick={handleOtpResend} />
      </ModalBox>

      {/* <FitnessOptions handleCloseFitnessOptions = {handleCloseFitnessOptions} /> */}
    </div>
  );
};

export default OtpModal;
