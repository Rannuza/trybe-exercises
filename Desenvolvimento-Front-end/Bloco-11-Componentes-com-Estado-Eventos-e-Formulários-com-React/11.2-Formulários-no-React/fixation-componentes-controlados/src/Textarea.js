import { Component } from "react";

class Textarea extends Component {
  render() {
    const { label, name, value, placeholder, rows, cols, handleChange } = this.props;
    return (
      <div className="divTextarea">
        <label>{label}</label>
        <textarea
          className="textarea"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          rows={rows} 
          cols={cols}
        />
      </div>

    );
  }
}

export default Textarea;