import { Box, Typography } from "@material-ui/core";
import React from "react";

import AddItemsForm from "./AddItemsForm";

const AddItems = () => {
  return (
    <div>
      <Box m={4}>
        <Typography align="center" variant="h4">
          Add Item to wishlist
        </Typography>
      </Box>
      <AddItemsForm />
    </div>
  );
};

export default AddItems;
