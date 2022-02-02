import { Component } from "react";

class Input extends Component {
  render() {
    const { label, name, type, value, placeholder, handleChange } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default Input;