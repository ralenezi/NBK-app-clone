// Apollo
import { gql } from "@apollo/client";

export const WISHLISTS = gql`
  query wishlists {
    wishlists {
      account {
        number
        balance
      }
      status
      wishlistType
    }
  }
`;

export const ACCOUNTS_QUERY = gql`
  query accounts {
    accounts {
      id
      number
      balance
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
