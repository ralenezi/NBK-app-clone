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

export const ITEM_QUERY = gql`
  query itemQuery($itemId: ID!) {
    item(itemId: $itemId) {
      name
      price
      status
    }
  }
`;
