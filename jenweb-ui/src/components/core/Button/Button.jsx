import React from 'react';

import '../Button/Button.css';

function Button(props) {
  return (
    <a className={props.class} onClick={props.onClick}>
      {props.text}
    </a>
  );
}

export default Button;
