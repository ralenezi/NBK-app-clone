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

export const UPDATE_WISHLIST_MUTATION = gql`
  mutation updateWishlistMutation(
    $accountNumber: String!
    $balance: Float!
    $balanceLimit: Float!
    $deductionAmount: Float!
    $deductionType: String!
    $status: Boolean!
    $visible: Boolean!
    $wishlistId: ID!
  ) {
    updateWishlistMutation(
      accountNumber: $accountNumber
      balance: $balance
      balanceLimit: $balanceLimit
      deductionAmount: $deductionAmount
      deductionType: $deductionType
      status: $status
      visible: $visible
      wishlistId: $wishlistId
    ) {
      success
    }
  }
`;
