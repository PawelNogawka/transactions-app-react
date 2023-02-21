import React, { useState, useEffect } from "react";

import { useFirestore } from "../../hooks/useFirestore";

import Input from "../../components/Ui/Input";
import Button from "../../components/Ui/Button";

import classes from "./HomeForm.module.scss";

const HomeForm = ({uid}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isFormValid, setIsFormValid] = useState({
    name: true,
    price: true,
  });

  const {response, addDocument} = useFirestore('transactions')

  useEffect(()=>{
       setName("")
       setPrice("")
  },[response.success])

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameIsValid = name.trim() === "" ? false : true;
    const priceIsValid = price.trim() === "" ? false : true;

  

    setIsFormValid({
      name: nameIsValid,
      price: priceIsValid,
    });

    if (!nameIsValid || !priceIsValid) return;

   addDocument({
    name,
    price,
    uid,
   })

  };

  return (
    <div className={classes.wrapper}>
      <h2>enter your transaction</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Input
          type="text"
          name="name"
          placeholder="Enter name..."
          label="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          error={!isFormValid.name}
          errorMessage="Please fill this field"
        />
        <Input
          type="number"
          name="name"
          placeholder="Enter price..."
          label="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          error={!isFormValid.price}
          errorMessage="Please fill this field"
        />
        <Button submit text="add" />
      </form>
    </div>
  );
};

export default HomeForm;
