import { Grid } from "@material-ui/core";
import React from "react";
import Navbar from "../common/Navbar";
import ListCard from "./ListCard";

const index = () => {
  return (
    <>
      <Navbar title="Someone's Manjam" />
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ backgroundColor: "#EAEAEA", height: "100vh" }}>
        <h3 style={{ marginBottom: 0 }}>Total Manjam's Fortune</h3>
        <h2>30050 KD</h2>

        <ListCard listType={"Short term"} value={60} />
        <ListCard listType={"Long term"} />
      </Grid>
    </>
  );
};

export default index;
