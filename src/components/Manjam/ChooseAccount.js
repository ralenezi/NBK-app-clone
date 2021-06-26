import React from "react";
import { useParams } from "react-router";
import AccountCard from "../common/AccountCard";
import Navbar from "../common/Navbar";

// ! I axpect to get the whole manjam based on the id in the params
// then fetch that manjam or get it from the state

const accounts = [
  { id: 1, number: "9748744785475567", balance: 5487002 },
  { id: 2, number: "9745785785475567", balance: 5666667002 },
];

const ChooseAccount = () => {
  const { id } = useParams();
  console.log(
    "🚀 ~ file: ChooseAccount.js ~ line 18 ~ ChooseAccount ~ manjamType",
    id
  );

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
