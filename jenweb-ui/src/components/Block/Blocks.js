import React from 'react';
import './Block.css';

function Blocks(props) {
  return (
    <div
      className="Block"
      style={{
        marginLeft: props.mleft,
        marginTop: props.mtop,
        marginBottom: props.mbottom,
      }}
    >
      <img
        className="pics"
        alt="person"
        src={props.source}
        style={{
          position: 'relative',
          top: '40%',
          right: props.right,
          backgroundColor: props.color,
        }}
      />
      <div className="Text-block" style={{ backgroundColor: props.color }}>
        {props.text}
        <h3 style={{ color: props.textColor }}>{props.name}</h3>
      </div>
    </div>
  );
}

export default Blocks;
