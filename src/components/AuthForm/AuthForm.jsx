import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSignup } from "../../hooks/useSignup";
import { useLogin } from "../../hooks/useLogin";

import Input from "../../components/Ui/Input";
import Button from "../Ui/Button";

import classes from "./AuthForm.module.scss";

const AuthForm = ({ heading, type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { error, isLoading, signup } = useSignup();
  const { loginError, loginIsLoading, login } = useLogin();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (type === "signup") {
      signup(email, password, displayName);
    } else if (type === "login") {
      login(email, password);
    }
  };

  const toggleFormLink = (
    <Link to={type === "login" ? "/signup" : "/login"}>
      <Button
        outlined
        text={
          type === "login"
            ? "don't have an account? signup"
            : "do you have account? login"
        }
      />
    </Link>
  );

  return (
    <div className={classes.formWrapper}>
      <h1>{heading}</h1>
      <form onSubmit={handleFormSubmit} className={classes.form}>
        <Input
          type="email"
          label="email"
          placeholder="enter your email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          label="password"
          placeholder="enter your password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {type === "signup" ? (
          <Input
            type="text"
            label="display name"
            placeholder="enter your name"
            name="name"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        ) : null}
        <div className={classes.buttons}>
          {isLoading || loginIsLoading ? (
            <Button text="loading..." disabled />
          ) : (
            <Button submit text={type === "login" ? "login" : "sign up"} />
          )}
          {toggleFormLink}
        </div>
        {error && <p className={classes.error}>{error}</p>}
        {loginError && <p className={classes.error}>{loginError}</p>}
      </form>
    </div>
  );
};

export default AuthForm;
