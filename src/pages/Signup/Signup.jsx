import React from 'react'
import Wrapper from "../../components/Ui/Wrapper";
import AuthForm from "../../components/AuthForm/AuthForm";

const Signup = () => {
  return (
    <main>
      <Wrapper>
        <AuthForm heading="sign up" type="signup"/>
      </Wrapper>
    </main>
  );
};

export default Signup
