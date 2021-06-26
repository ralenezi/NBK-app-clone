import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputAdornment,
  FormControlLabel,
  Box,
  Grid,
  TextField,
  Button,
  Card,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
} from "@material-ui/core";

// Apollo
import { useMutation } from "@apollo/client";

// Mutations
import { WISHLIST_QUERY } from "../../../graphql/queries";
import { UPDATE_WISHLIST_MUTATION } from "../../../graphql/mutations";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: 16,
    padding: "16px 16px 24px",
  },
  button: {
    textTransform: "none",
  },
  cancelButton: {
    color: theme.palette.common.white,
    textTransform: "none",
    backgroundColor: theme.palette.common.gray,
  },
}));

const SettingsForm = ({ wishlist }) => {
  const classes = useStyles();
  const history = useHistory();

  const [updateWishlistMutation] = useMutation(UPDATE_WISHLIST_MUTATION, {
    refetchQueries: [
      {
        query: WISHLIST_QUERY,
        variables: { wishlistId: wishlist.id },
      },
    ],
    onCompleted({ updateWishlistMutation }) {
      if (updateWishlistMutation.success) history.push("/manjam/");
    },
  });

  const [values, setValues] = React.useState({
    ...wishlist,
    accountNumber: wishlist.account.number,
    wishlistId: wishlist.id,
  });

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateWishlistMutation({ variables: { ...values } });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    history.push("/manjam/");
  };

  return (
    <Card className={classes.root}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={2} justify="center">
          <Grid item>
            <TextField
              name="balanceLimit"
              label="Balance Limit"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">KD</InputAdornment>
                ),
              }}
              value={values.balanceLimit}
              fullWidth
              variant="filled"
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">Deduction Type</FormLabel>
              <RadioGroup
                color="primary"
                name="deductionType"
                value={values.deductionType}
                onChange={handleChange}>
                <FormControlLabel
                  value="FIXED"
                  control={<Radio color="primary" />}
                  label="Fixed"
                  checked={values.deductionType === "FIXED"}
                />
                <FormControlLabel
                  value="PERCENTAGE"
                  control={<Radio color="primary" />}
                  label="Percentage"
                  checked={values.deductionType === "PERCENTAGE"}
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item>
            <TextField
              name="deductionAmount"
              label="Deduction Amount"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {values.deductionType === "FIXED" ? "KD" : "%"}
                  </InputAdornment>
                ),
              }}
              value={values.deductionAmount}
              fullWidth
              variant="filled"
              onChange={handleChange}
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
      </form>
    </Card>
  );
};

export default SettingsForm;
