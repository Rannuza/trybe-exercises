import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(nameButton) {
    console.log(`Clicou no ${nameButton}!`);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  render() {
    const { nameButton } = this.props;
    return (
      <button onClick={() => {this.handleClick(nameButton)}}>{ this.state.numeroDeCliques}</button>
    );
  }
}

Button.propTypes = {
  nameButton: PropTypes.string.isRequired,
};

export default Button;