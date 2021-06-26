import { useQuery } from "@apollo/client";
import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { WISHLISTS, ACCOUNTS_QUERY } from "../../graphql/queries";
import Navbar from "../common/Navbar";
import ListCard from "./ListCard";

const Manjam = () => {
  const [wishlistsBalanceTotal, setWishlistsBalanceTotal] = useState(0);
  const { loading, error, data } = useQuery(WISHLISTS);
  const accData = useQuery(ACCOUNTS_QUERY);
  const userName = accData.data.accounts[0].user.fullName;

  useEffect(() => {
    if (data) {
      let listsTotalSum = 0;
      data?.wishlists?.forEach((list) => {
        listsTotalSum += list.balance;
      });
      setWishlistsBalanceTotal(listsTotalSum);
    }
  }, []);

  const WISHLISTCARDS = data?.wishlists?.map((list) => {
    return (
      <ListCard
        key={list.id}
        wishlist={list}
        value={
          list.balance < list.total ? (list.balance / list.total) * 100 : 100
        }
      />
    );
  });
  return (
    <>
      <Navbar title={`${userName.split(" ")[0]}'s Manjam`} />
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ backgroundColor: "#EAEAEA", height: "100vh" }}>
        <h3 style={{ marginBottom: 0 }}>Total Manjam's Fortune</h3>
        <h2>{wishlistsBalanceTotal} KD</h2>
        {WISHLISTCARDS}
      </Grid>
    </>
  );
};

export default Manjam;
