import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <section className="img">
        <img src={this.props.source} alt={this.props.alternativeText} />;
      </section>
    )
  }
}

export default Image;