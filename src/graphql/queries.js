// Apollo
import { gql } from "@apollo/client";

export const ITEM_QUERY = gql`
  query itemQuery($itemId: ID!) {
    item(itemId: $itemId) {
      name
      price
      status
    }
  }
`;
