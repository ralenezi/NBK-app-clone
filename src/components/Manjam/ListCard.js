import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  Link,
  Typography,
  colors,
  makeStyles,
  Grid,
  LinearProgress,
  Container,
  Button,
} from "@material-ui/core";
import { MoreVert, Info } from "@material-ui/icons";
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

const ListCard = ({ listType, value }) => {
  const classes = useStyles();

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
        <h4 className={classes.progressContent2}>1 KD out of 4000 KD</h4>
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
