import React from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import '../Phone/style.css';

const Phone = props => {
  const { value, setValue } = props;

  return (
    <PhoneInput
      placeholder="Enter Your Mobile Number"
      country={'us'}
      value={value}
      onChange={setValue}
    />
  );
};

export default Phone;
