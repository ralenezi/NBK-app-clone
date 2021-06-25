import { Box, Typography } from "@material-ui/core";
import React from "react";

import AddItemForm from "./AddItemForm";

const AddItem = () => {
  return (
    <div>
      <Box m={4}>
        <Typography align="center" variant="h4">
          Add Item to wishlist
        </Typography>
      </Box>
      <AddItemForm />
    </div>
  );
};

export default AddItem;
