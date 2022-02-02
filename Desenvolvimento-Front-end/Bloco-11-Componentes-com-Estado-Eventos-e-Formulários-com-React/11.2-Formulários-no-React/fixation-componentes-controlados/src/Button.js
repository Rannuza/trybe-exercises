import { Component } from "react";

class Button extends Component {
  render() {
    const { type, value, name } = this.props;
    return (
      <div>
        <button type={type} value={value} className="botao">{name}</button>
      </div>
    );
  }
}

export default Button;