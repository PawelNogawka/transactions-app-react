import React from "react";

import { useFirestore } from "../../hooks/useFirestore";

import Transaction from "./Transaction";

import classes from "./TransactionsList.module.scss";

const TransactionsList = ({ transactions }) => {
  const { deleteDocument } = useFirestore("transactions");

  if (transactions.length == 0) {
    return <p className={classes.error}>transactions list is empty</p>;
  }
  return (
    <>
      <h2>Transactions list</h2>
      <ul className={classes.transactions}>
        {transactions.map((transaction) => (
          <li>
            <Transaction
              name={transaction.name}
              price={transaction.price}
              deleteDocument={deleteDocument}
              id={transaction.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionsList;
