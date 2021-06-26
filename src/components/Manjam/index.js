import { useQuery } from "@apollo/client";
import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { WISHLISTS } from "../../graphql/queries";
import Navbar from "../common/Navbar";
import ListCard from "./ListCard";

const Manjam = () => {
  const [wishlistsBalanceTotal, setWishlistsBalanceTotal] = useState(0);
  const { loading, error, data } = useQuery(WISHLISTS);

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
      <Navbar title="Someone's Manjam" />
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
