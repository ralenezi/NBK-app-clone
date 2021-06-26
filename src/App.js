import React from "react";

// Apollo
import { useQuery } from "@apollo/client";

// Styles
import "./App.css";
import theme from "./theme/index";
import { ThemeProvider } from "@material-ui/core";

// Components
import BottomNav from "./components/common/BottomNav";

// Queries
import { WISHLISTS, ACCOUNTS_QUERY } from "./graphql/queries";

// Routes
import Routes from "./routes";

const App = () => {
  const { loading, error, data } = useQuery(ACCOUNTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{console.log(error)}</p>;
  console.log("🚀 ~ file: App.js ~ line 11 ~ App ~ data", data);

  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <Routes />
        <BottomNav />
      </div>
    </ThemeProvider>
  );
};

export default App;
