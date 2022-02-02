import { Component } from "react";

class Header extends Component {
  render() {
    const { name } = this.props;
    return (
      <header>
        <h1>{name}</h1>
      </header>
    );
  }
}

export default Header;