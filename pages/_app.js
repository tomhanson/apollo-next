import App, { Container } from 'next/app';
import React from 'react';
// polyfill
import fetch from 'node-fetch';
// apollo
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

type Props = {
  Component: Object,
  pageProps: Object,
};
type ApollClientProps = {
  link: Object,
  cache: InMemoryCache,
};

const httpLink = new HttpLink(({ uri: 'https://graphql-pokemon.now.sh/', fetch }: Object));

const client = new ApolloClient(
  ({
    link: httpLink,
    cache: new InMemoryCache(),
  }: ApollClientProps)
);

class myApp extends App<Props> {
  static async getInitialProps({ Component, router, ctx }: Object<any>): Object {
    let pageProps: Object = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    );
  }
}

export default myApp;
