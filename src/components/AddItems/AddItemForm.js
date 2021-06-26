import { useMutation } from "@apollo/client";
import { Box, Button, Grid, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useHistory } from "react-router-dom";

import { ADD_ITEM_TO_WISHLIST } from "../../graphql/mutations";

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none",
  },
  cancelButton: {
    color: theme.palette.common.white,
    textTransform: "none",
    backgroundColor: theme.palette.common.gray,
  },
}));

export default function AddItemForm({ wishlistId = 1 }) {
  const classes = useStyles();
  const history = useHistory();

  const [values, setValues] = React.useState({
    name: "",
    price: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [addItemToWishlist] = useMutation(ADD_ITEM_TO_WISHLIST, {
    onCompleted({ addItemMutation }) {
      if (addItemMutation.success) history.push("/");
    },
  });

  const addItemToWishlistAction = () => {
    addItemToWishlist({ variables: { wishlistId, ...values } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItemToWishlistAction();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <Box m={2}>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={2} justify="center">
          <Grid item>
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              fullWidth
              onChange={handleChange("name")}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              label="Price"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">KD</InputAdornment>
                ),
              }}
              fullWidth
              variant="filled"
              onChange={handleChange("price")}
              required
            />
          </Grid>
        </Grid>
        <Box my={4}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.button}>
                Add
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                className={classes.cancelButton}
                onClick={handleCancel}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}
