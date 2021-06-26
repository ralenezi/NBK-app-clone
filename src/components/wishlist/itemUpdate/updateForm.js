// Apollo
import { useMutation } from "@apollo/client";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";
// Mutations
import {
  DELETE_ITEM_MUTATION,
  UPDATE_ITEM_MUTATION,
} from "../../../graphql/mutations";

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none",
  },
  cancelButton: {
    color: theme.palette.common.white,
    textTransform: "none",
    backgroundColor: theme.palette.common.gray,
  },
  deleteButton: {
    color: theme.palette.common.white,
    textTransform: "none",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    "&:focus": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

const UpdateForm = ({ name, price, status, itemID }) => {
  const classes = useStyles();
  const history = useHistory();

  const [updateItemMutation] = useMutation(UPDATE_ITEM_MUTATION, {
    onCompleted({ updateItemMutation }) {
      if (updateItemMutation.success) history.push("/manjam");
    },
  });

  const [deleteItemMutation] = useMutation(DELETE_ITEM_MUTATION, {
    onCompleted({ deleteItemMutation }) {
      if (deleteItemMutation.success) history.push("/manjam");
    },
  });

  const [values, setValues] = React.useState({
    name: name,
    price: price,
    status: status,
    itemId: itemID,
  });

  const handleChange = (event) => {
    event.target.name === "status"
      ? setValues((values) => ({
          ...values,
          status: !values.status,
        }))
      : setValues((values) => ({
          ...values,
          [event.target.name]: event.target.value,
        }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateItemMutation({ variables: { ...values } });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    deleteItemMutation({ variables: { itemId: itemID } });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <Box m={2}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={2} justify="center">
          <Grid item>
            <TextField
              name="name"
              label="Name"
              value={values.name}
              variant="filled"
              fullWidth
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item>
            <TextField
              name="price"
              label="Price"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">KD</InputAdornment>
                ),
              }}
              value={values.price}
              fullWidth
              variant="filled"
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  name="status"
                  color="primary"
                  checked={values.status}
                  onChange={handleChange}
                />
              }
              label="Goal Achieved"
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
                Update
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

        <Box my={4}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.deleteButton}
                onClick={handleDelete}>
                Remove Item from Wishlist
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default UpdateForm;
