import { Box, Card, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import CustomizedProgressBars from "../Manjam/Progress";
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
const ItemCard = ({ name }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container alignItems="center" justify="center">
        <Box>
          <h3 className={classes.heading}> wishlist Items</h3>
        </Box>
        <CustomizedProgressBars value={10} />
      </Grid>
    </Card>
  );
};

export default ItemCard;
