import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { retryLink, errorLink, httpLink } from "./helpers/graphql.helper";

export const client = new ApolloClient({
  link: ApolloLink.from([retryLink, errorLink, httpLink]),
  cache: new InMemoryCache(),

  defaultOptions: {
    watchQuery: { fetchPolicy: "cache-and-network", errorPolicy: "all" },
    query: { fetchPolicy: "no-cache", errorPolicy: "all" },
  },
});
