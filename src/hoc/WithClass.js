import React from 'react';

const WithClass = (WrappedComponent, classes) => {
  return class extends React.Component {
    render() {
      return (
        <div className={classes}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
};

export default WithClass;
