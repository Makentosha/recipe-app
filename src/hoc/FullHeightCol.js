import React from 'react';

const fullHeightCol = (props) => {
  const widthClass = {
    boxSizing: 'border-box',
    width: props.flexGrow * 25 + '%',
    overflowY: 'scroll',
    height: '100%'
  };

  return (
    <div style={widthClass}>
      {props.children}
    </div>
  )
};

export default fullHeightCol;
