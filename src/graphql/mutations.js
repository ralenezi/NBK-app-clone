// Apollo
import { gql } from "@apollo/client";

export const UPDATE_ITEM_MUTATION = gql`
  mutation updateItem(
    $itemId: ID!
    $name: String
    $price: Float
    $status: Boolean
  ) {
    updateItemMutation(
      itemId: $itemId
      name: $name
      price: $price
      status: $status
    ) {
      success
    }
  }
`;

export const DELETE_ITEM_MUTATION = gql`
  mutation deleteItem($itemId: ID!) {
    deleteItemMutation(itemId: $itemId) {
      success
    }
  }
`;
