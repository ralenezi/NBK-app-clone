import { Box, Button, Card, Grid, makeStyles } from "@material-ui/core";
import { Info, MoreVert } from "@material-ui/icons";
import React from "react";
import CustomizedProgressBars from "./Progress";

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

const ListCard = ({ wishlist: { wishlistType, total, balance }, value }) => {
  const classes = useStyles();
  let listType = "";
  if (wishlistType === "SHORT") listType = "Short Term";
  else listType = "Long Term";
  return listType && value ? (
    <Card className={classes.root}>
      <Box display="flex" flexDirection="row-reverse" mt={2}>
        <MoreVert />
      </Box>
      <Grid container alignItems="center" justify="center">
        <Box>
          <h3 className={classes.heading}>{listType} wishlist</h3>
        </Box>
        <CustomizedProgressBars value={value} />

        <h4 className={classes.progressContent}>Progress &nbsp;</h4>
        <h4 className={classes.progressContent2}>
          {balance} KD out of {total} KD
        </h4>
      </Grid>
    </Card>
  ) : (
    <Card className={classes.root}>
      <Box display="flex" flexDirection="row-reverse" mt={2} mr={1}>
        <Info />
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box>
          <h3 className={classes.heading}>{listType} wishlist</h3>
        </Box>

        <Button className={classes.button} variant="contained" color="peimary">
          Choose Account
        </Button>
      </Box>
    </Card>
  );
};

export default ListCard;
