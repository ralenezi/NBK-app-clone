import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, CardContent, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 16,
  },
  title: {
    fontWeight: "bold",
  },
  button: {
    textTransform: "none",
  },
});

const CurrentAccountCard = ({ wishlistID, number }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/wishlist/${wishlistID}/settings/switch-account/`);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Current Account:
        </Typography>

        <Box my={2}>
          <Typography variant="h4" color="primary">
            **** **** **** *{number.substring(13)}
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.button}
          onClick={handleClick}>
          Switch Account
        </Button>
      </CardContent>
    </Card>
  );
};

export default CurrentAccountCard;
