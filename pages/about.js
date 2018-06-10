import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

type Props = {
  pokemons: {
    loading: Boolean,
    pokemons: Object,
  },
};

const About = (props: Props): React.Element<any> => {
  const { loading, pokemons } = props.pokemons;
  return (
    <div>
      <Head title="Home" />
      <Nav />

      <div className="hero">
        <h1 className="title">Welcome to Next!</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>

        <div className="row">
          <Link href="https://github.com/zeit/next.js#getting-started">
            <a className="card">
              <h3>Getting Started &rarr;</h3>
              <p>Learn more about Next on Github and in their examples</p>
              <p>Learn more about Next on Github and in their examples</p>
            </a>
          </Link>
          <Link href="https://open.segment.com/create-next-app">
            <a className="card">
              <h3>Examples &rarr;</h3>
              <p>
                Find other example boilerplates on the <code>create-next-app</code> site
              </p>
            </a>
          </Link>
        </div>
        <div className="row">
          {!loading ? (
            pokemons.map((pokemon: Object) => (
              <div className="card" key={pokemon.id}>
                <Link
                  href={{ pathname: '/pokemon', query: { id: pokemon.id } }}
                  as={`/pokemon/${pokemon.name.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  <a>
                    <h3>{pokemon.name}</h3>
                    <p>{pokemon.types.map((type: string) => <span key={type}>{type}</span>)}</p>
                  </a>
                </Link>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <style jsx>
        {`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
            margin-bottom: 30px;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}
      </style>
    </div>
  );
};
const FEED_QUERY: String = gql`
  {
    pokemons(first: 151) {
      name
      id
      types
      attacks {
        special {
          damage
        }
      }
    }
  }
`;

type GraphProps = {
  name: string,
};

export default graphql((FEED_QUERY: String), ({ name: 'pokemons' }: GraphProps))(About);
