// Apollo
import { gql } from "@apollo/client";

export const WISHLISTS = gql`
  query wishlists {
    wishlists {
      id
      account {
        number
        balance
      }
      id
      status
      total
      wishlistType
      balance
    }
  }
`;

export const WISHLIST_QUERY = gql`
  query wishlist($wishlistId: ID!) {
    wishlist(wishlistId: $wishlistId) {
      account {
        number
      }
      id
      wishlistType
      balance
      balanceLimit
      deductionType
      deductionAmount
      status
      visible
    }
  }
`;

export const ACCOUNTS_QUERY = gql`
  query accounts {
    accounts {
      id
      number
      balance
      user {
        fullName
      }
    }
  }
`;

export const ITEM_QUERY = gql`
  query itemQuery($itemId: ID!) {
    item(itemId: $itemId) {
      name
      price
      status
    }
  }
`;
