import { Box, Button, Grid, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";

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

export default function AddItemsForm() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: "",
    price: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Box m={2}>
      <form cnoValidate autoComplete="off">
        <Grid container direction="column" spacing={2} justify="center">
          <Grid item>
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              fullWidth
              onChange={handleChange("name")}
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
            />
          </Grid>
        </Grid>
        <Box my={4}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={6}>
              <Button
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
                className={classes.cancelButton}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}
