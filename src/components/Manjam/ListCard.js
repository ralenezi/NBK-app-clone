import React from "react";
import { useHistory } from "react-router-dom";

import { Info, MoreVert } from "@material-ui/icons";
import {
  Box,
  Card,
  makeStyles,
  Grid,
  Button,
  IconButton,
} from "@material-ui/core";

// Components
import CustomizedProgressBars from "./Progress";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: "230px",
    border: "1px solid black",
    marginBottom: "22px",
    borderRadius: "12px",
  },
  heading: {
    paddingTop: "15px",
  },
  progressContent: {
    display: "inline",
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

const ListCard = ({
  wishlist: { id, wishlistType, total, balance, status },
  value,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const listType = wishlistType === "SHORT" ? "Short Term" : "Long Term";

  const handleClick = () => {
    history.push(`/wishlist/${id}/settings/`);
  };

  return status ? (
    <Card className={classes.root}>
      <Box display="flex" flexDirection="row-reverse" mt={2}>
        <IconButton color="primary" onClick={handleClick}>
          <MoreVert />
        </IconButton>
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

        <Button
          component={RouterLink}
          to={{
            pathname: `wishlist/${id}/settings/switch-account`,
            state: { listType },
          }}
          className={classes.button}
          variant="contained"
          color="peimary">
          Choose Account
        </Button>
      </Box>
    </Card>
  );
};

export default ListCard;
