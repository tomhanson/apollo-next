import React, { Component } from 'react';

import GetPokemonWithData from '../components/GetPokemonWithData';
// @flow strict

type Props = {
  pokemonId: string,
};

type State = {
  pokemonName: string,
};

type initReturn = {
  pokemonId: string,
};

class Pokemon extends Component<Props, State> {
  state = {
    pokemonName: '',
  };
  static getInitialProps({ query: { id } }: Object): initReturn {
    return { pokemonId: id };
  }
  render() {
    return <GetPokemonWithData pokemonName={this.state.pokemonName} />;
  }
}
export default Pokemon;
