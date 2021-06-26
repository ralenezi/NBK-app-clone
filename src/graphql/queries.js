// Apollo
import { gql } from "@apollo/client";

export const WISHLISTS = gql`
  query wishlists {
    wishlists {
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
