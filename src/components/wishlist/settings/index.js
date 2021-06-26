import React from "react";
import { Box, Typography } from "@material-ui/core";

// Components
import Navbar from "../../common/Navbar";
import CurrentAccountCard from "./currentAccountCard";

const Settings = () => {
  const wishlist = {
    id: 1,
    wishlistType: "SHORT",
    account: {
      number: "0000111122223333",
    },
  };

  const title =
    wishlist.wishlistType === "SHORT"
      ? "Short Term Wishlist Settings"
      : "Long Term Wishlist Settings";
  return (
    <>
      <Navbar {...{ title }} />
      <Box m={4}>
        <CurrentAccountCard
          wishlistID={wishlist.id}
          number={wishlist.account.number}
        />
      </Box>
    </>
  );
};

export default Settings;
