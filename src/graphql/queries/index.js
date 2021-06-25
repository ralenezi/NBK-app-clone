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
