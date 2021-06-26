import React from "react";
import { useParams } from "react-router-dom";

import { Box } from "@material-ui/core";

// Apollo
import { useQuery } from "@apollo/client";

// Query
import { WISHLIST_QUERY } from "../../../graphql/queries";

// Components
import Navbar from "../../common/Navbar";
import SettingsForm from "./settingsForm";
import CurrentAccountCard from "./currentAccountCard";

const Settings = () => {
  const { wishlistID } = useParams();

  const { loading, data } = useQuery(WISHLIST_QUERY, {
    variables: { wishlistId: wishlistID },
  });

  if (loading) return null;

  const title =
    data.wishlist.wishlistType === "SHORT"
      ? "Short Term Wishlist Settings"
      : "Long Term Wishlist Settings";
  return (
    <>
      <Navbar {...{ title }} />
      <Box m={4}>
        <CurrentAccountCard
          {...{ wishlistID }}
          number={data.wishlist.account.number}
        />
        <SettingsForm wishlist={data.wishlist} />
      </Box>
    </>
  );
};

export default Settings;
