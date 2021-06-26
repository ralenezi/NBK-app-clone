import { Box, Button, Card, Grid, makeStyles } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "160px",
    border: "1px solid black",
    marginBottom: "22px",
    borderRadius: "12px",
    marginTop: "22px",
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
const ItemCard = ({ id, name, price, status }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid item lg={12} sm={12} xs={12} lg={12}>
      <Card className={classes.root}>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <MoreVert onClick={() => history.push(`/items/${id}/update`)} />
        </Box>
        <Grid container alignItems="center" justify="center">
          <Box>
            <div
              className={classes.progressContent2}
              style={{ fontWeight: "bold" }}>
              {name}
            </div>
          </Box>
        </Grid>
        <Grid container alignItems="center" justify="center">
          <Box mt={2}>
            <div>{price}</div>
          </Box>
        </Grid>
        <Box display="flex" flexDirection="row-reverse" mt={2} mr={4}>
          <Button variant="contained" color="primary" disabled={!status}>
            Redeem
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};

export default ItemCard;
