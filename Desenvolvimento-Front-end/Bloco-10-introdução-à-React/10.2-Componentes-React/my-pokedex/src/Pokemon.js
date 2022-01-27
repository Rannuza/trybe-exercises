import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component{
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemons;
    return (
      <div className="divPk">
        <h2>{name}</h2>
        <hr/>
        <div className="divPkInterna">
          <ul>
            <li>{type}</li>
            <li>{`Average Weight: ${value} ${measurementUnit}` }</li>
          </ul>
          <img src={image} alt={`Imagem do ${name}`} />
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }),
  image: PropTypes.string,
}

export default Pokemon;