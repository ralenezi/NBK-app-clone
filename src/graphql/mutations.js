// Apollo
import { gql } from "@apollo/client";

export const ADD_ITEM_TO_WISHLIST = gql`
  mutation addItem($name: String!, $price: Float!, $wishlistId: ID!) {
    addItemMutation(name: $name, price: $price, wishlistId: $wishlistId) {
      success
    }
  }
`;

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
