import "./App.css";

import { useQuery } from "@apollo/client";
import { ThemeProvider } from "@material-ui/core";
import React from "react";

import BottomNav from "./components/common/BottomNav";
import { WISHLISTS } from "./graphql/queries";
// Routes
import Routes from "./routes";
import theme from "./theme/index";

const App = () => {
  const { loading, error, data } = useQuery(WISHLISTS);

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
