import React from "react";

// Apollo
import { useQuery } from "@apollo/client";

// Queries
import { WISHLISTS } from "./graphql/queries";

// Routes
import Routes from "./routes";

// Components
import Navbar from "./components/common/Navbar";
import BottomNav from "./components/common/BottomNav";

// Styles
import "./App.css";
import theme from "./theme/index";
import { ThemeProvider } from "@material-ui/core";

const App = () => {
  const { loading, error, data } = useQuery(WISHLISTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{console.log(error)}</p>;
  console.log("🚀 ~ file: App.js ~ line 11 ~ App ~ data", data);

  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <Navbar />
        <Routes />
        <BottomNav />
      </div>
    </ThemeProvider>
  );
};

export default App;
