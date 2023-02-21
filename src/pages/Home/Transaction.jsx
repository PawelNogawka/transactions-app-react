import React from "react";

import classes from "./Transaction.module.scss";

const Transaction = ({ name, price, deleteDocument, id }) => {
  return (
    <div className={classes.transaction}>
      <h3 className={classes.name}>{name}</h3>
      <p className={classes.price}>{price}$</p>
      <button onClick={() => deleteDocument(id)}>delete</button>
    </div>
  );
};

export default Transaction;
