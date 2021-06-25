import { gql } from "@apollo/client";

export const ADD_ITEM_TO_WISHLIST = gql`
  mutation addItem($name: String!, $price: Float!, $wishlistId: ID!) {
    addItemMutation(name: $name, price: $price, wishlistId: $wishlistId) {
      success
    }
  }
`;
