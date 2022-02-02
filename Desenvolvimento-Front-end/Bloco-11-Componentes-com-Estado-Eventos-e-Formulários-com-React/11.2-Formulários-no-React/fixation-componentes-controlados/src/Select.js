import { Component } from "react";

class Select extends Component {
  render() {
    const { label, name, value, handleChange } = this.props;
    const cores = ['Pink', 'Deeppink', 'Plum'];
    return (
      <div>
        <label>{label}</label>
        <select name={name} value={value} onChange={handleChange}>
          {cores.map((cor) => (
            <option className={cor} value={cor}>{cor}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Select;