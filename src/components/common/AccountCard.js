import { useMutation } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { KeyboardArrowLeft } from "@material-ui/icons";
import React from "react";
import { useHistory, useParams } from "react-router";
import { UPDATE_WISHLIST_MUTATION } from "../../graphql/mutations";
import { WISHLISTS } from "../../graphql/queries";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 16,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  pos: {
    marginBottom: 12,
  },
});

const AccountCard = ({ number, balance }) => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const values = {
    wishlistId: id,
    status: true,
    visible: true,
    deductionType: "FIXED",
    balanceLimit: balance,
    accontNumber: number,
    balance: balance,
  };

  // doing mutations
  const [updateWishlist] = useMutation(UPDATE_WISHLIST_MUTATION, {
    refetchQueries: [
      {
        query: WISHLISTS,
      },
    ],
    onCompleted({ updateWishlistMutation }) {
      if (updateWishlistMutation.success) history.push("/manjam");
    },
  });

  const updateWishlistAction = () => {
    updateWishlist({ variables: { ...values } });
  };

  return (
    <Card className={classes.root}>
      <Box display="flex" flexDirection="row-reverse" mt={1} mr={1}>
        {id && <KeyboardArrowLeft onClick={updateWishlistAction} />}
      </Box>
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
