import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";

// Apollo
import { useQuery } from "@apollo/client";

// Query
import { ITEM_QUERY } from "../../../graphql/queries";

// Components
import UpdateForm from "./updateForm";

const ItemUpdate = () => {
  const { itemID } = useParams();

  const { loading, data } = useQuery(ITEM_QUERY, {
    variables: { itemId: itemID },
  });

  if (loading) return null;

  return (
    <Box m={4}>
      <Typography align="center" variant="h4">
        Update Item Form
      </Typography>

      <UpdateForm
        name={data.item.name}
        price={data.item.price}
        status={data.item.status}
        itemID={itemID}
      />
    </Box>
  );
};

export default ItemUpdate;
