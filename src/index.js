import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./providers/AuthProvider";
const httpLink = createHttpLink({
  uri: "http://127.0.0.1:8000/graphql/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  console.log("**********************************", token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </AuthProvider>
      ,
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
