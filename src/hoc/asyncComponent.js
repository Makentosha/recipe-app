import React from 'react';

const asyncComponent = (importCmp) => {
  return class extends React.Component {
    state = {
      component: null
    };

    componentDidMount() {
      importCmp()
        .then(component => {
          this.setState({component: component.default})
        });
    }

    render() {
      const C = this.state.component;

      return C ? <C{...this.props}/> : null
    }
  }
};

export default asyncComponent;
