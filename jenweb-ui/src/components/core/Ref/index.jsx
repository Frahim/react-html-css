import React from 'react';

import '../Ref/style.css';

function Ref(props) {
  return (
    <a className={props.class} onClick={props.onClick}>
      {props.text}
    </a>
  );
}

export default Ref;
