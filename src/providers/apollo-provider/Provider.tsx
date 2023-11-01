"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const ProviderApollo = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    // uri: "http://localhost:3000/api/graphql", // for local development
    uri: "https://ebooktoria.vercel.app/api/graphql", // for production
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
