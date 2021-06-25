import React from "react";

import AccountCard from "../common/AccountCard";

const accounts = [
  { id: 1, number: "9748744785475567", balance: 5487002 },
  { id: 2, number: "9745785785475567", balance: 5666667002 },
];

const index = () => {
  const accountCards = accounts.map(({ id, number, balance }) => (
    <AccountCard key={`${id}`} number={number} balance={balance} />
  ));

  return <div>{accountCards}</div>;
};

export default index;
