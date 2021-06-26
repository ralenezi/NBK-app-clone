import { useQuery } from "@apollo/client";
import React from "react";
import { ACCOUNTS_QUERY } from "../../graphql/queries";
import AccountCard from "../common/AccountCard";
import Navbar from "../common/Navbar";

const Home = () => {
  const { loading, error, data } = useQuery(ACCOUNTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{console.log(error)}</p>;
  console.log(data);
  const accountCards = data.accounts.map(({ id, number, balance }) => (
    <AccountCard key={id} number={number} balance={balance} />
  ));

  return (
    <>
      <Navbar />
      <div>{accountCards}</div>
    </>
  );
};

export default Home;
