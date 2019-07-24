import React from 'react';
import PropTypes from 'prop-types';

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
  );
};

fullHeightCol.propTypes = {
  flexGrow: PropTypes.number,
  children: PropTypes.object
};

export default fullHeightCol;
