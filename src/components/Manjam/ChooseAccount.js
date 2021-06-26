import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { ACCOUNTS_QUERY } from "../../graphql/queries";
import AccountCard from "../common/AccountCard";
import Navbar from "../common/Navbar";

const ChooseAccount = () => {
  const { id } = useParams();
  const values = {
    id,
    status: true,
    visible: true,
    deductionType: "FIXED",
  };
  const { loading, error, data } = useQuery(ACCOUNTS_QUERY);

  const { accounts } = data;

  return (
    <div>
      <Navbar title={`choose list type wishlist account`} />

      {accounts.map(({ id, number, balance }) => (
        <AccountCard key={`${id}`} number={number} balance={balance} />
      ))}
    </div>
  );
};

export default ChooseAccount;
