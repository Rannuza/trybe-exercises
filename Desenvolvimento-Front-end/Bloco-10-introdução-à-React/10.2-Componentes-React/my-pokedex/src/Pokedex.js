import { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends Component {
  render () {
    return (
      <section className="sectionPk">
        {pokemons.map((pk) => (
          <Pokemon key={pk.id} pokemons={pk} />
        ))}
      </section>
    );
  }
}

export default Pokedex;