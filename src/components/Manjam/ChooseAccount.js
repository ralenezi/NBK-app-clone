import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { ACCOUNTS_QUERY } from "../../graphql/queries";
import AccountCard from "../common/AccountCard";
import Navbar from "../common/Navbar";

const ChooseAccount = (props) => {
  const listType = props?.location?.state?.listType;
  const { loading, error, data } = useQuery(ACCOUNTS_QUERY);
  const { accounts } = data;

  return (
    <div>
      <Navbar title={`Choose ${listType ?? ""} Wishlist Account`} />

      {accounts.map(({ id, number, balance }) => (
        <AccountCard key={`${id}`} number={number} balance={balance} />
      ))}
    </div>
  );
};

export default ChooseAccount;
