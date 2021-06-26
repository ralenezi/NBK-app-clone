import { Box, Card, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../../common/Navbar";
import CustomizedProgressBars from "../../Manjam/Progress";
import ItemCard from "../ItemCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: "220px",
    border: "1px solid black",
    marginBottom: "22px",
    borderRadius: "12px",
  },
  heading: {
    paddingTop: "15px",
  },
  progressContent: {
    display: "inline",
    // marginRight
  },
  progressContent2: {
    display: "inline",
    color: theme.palette.primary,
  },
  button: {
    textTransform: "none",
    display: "block",
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.primary.main,
  },
}));
const ItemsList = () => {
  const classes = useStyles();
  console.log("HHHHHHHHHHHHHHHHHHHHHH");
  return (
    <>
      <Navbar title="Someone's Manjam" />
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ backgroundColor: "#EAEAEA", height: "100vh" }}>
        <CustomizedProgressBars value={15} />
        <Card className={classes.root}>
          <Grid container alignItems="center" justify="center">
            <Box>
              <h3 className={classes.heading}> wishlist Items</h3>
            </Box>
            <ItemCard />
            fasjglfsnka;jml
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default ItemsList;
