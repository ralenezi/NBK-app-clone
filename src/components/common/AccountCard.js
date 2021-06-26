import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 16,
  },
});

const AccountCard = ({ number, balance }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Card Number: {number}
        </Typography>
        <Box my={2}>
          <Typography variant="h3">Balance: {balance} KD</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AccountCard;
