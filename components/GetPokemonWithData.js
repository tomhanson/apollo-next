import React from 'react';
import Link from 'next/link';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { ButtonStyle } from '../components/Button/Button.styles';

const Title: string = styled.a`
  font-size: 1.5em;
  text-align: center;
  color: green;
  display: flex;
`;

type Props = {
  name: string,
  image: string,
  loading: boolean,
  pokemon: {
    pokemon: {
      image: string,
      name: string,
    },
    loading: Boolean,
  },
  pokemonName: string,
};

const GetPokemonWithData = (props: Props): React.Element<any> => (
  <div>
    <Link prefetch href="/about">
      <ButtonStyle secondary>
        <a>Go back</a>
      </ButtonStyle>
    </Link>
    <p>
      <Title>{props.pokemonName}</Title>
    </p>
    {(!props.pokemon.loading: Boolean) ? (
      <img src={props.pokemon.pokemon.image} alt={props.pokemon.pokemon.name} />
    ) : (
      <img src="../static/pokeball.gif" alt="" />
    )}
  </div>
);
const FEED_QUERY: string = gql`
  # 2
  query fetchPokemon($name: String!) {
    pokemon(name: $name) {
      name
      image
    }
  }
`;
type GraphProps = {
  name: string,
  options: Function,
};

export default graphql(
  (FEED_QUERY: string),
  (({
    name: 'pokemon',
    options: (props: Props) => ({
      variables: {
        name: props.pokemonName,
      },
    }),
  }: GraphProps): Object)
)(GetPokemonWithData);
