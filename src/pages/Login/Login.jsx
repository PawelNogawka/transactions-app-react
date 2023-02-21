import React from "react";

import Wrapper from "../../components/Ui/Wrapper";
import AuthForm from "../../components/AuthForm/AuthForm";

const Login = () => {
  return (
    <main>
      <Wrapper>
        <AuthForm heading="login" type="login" />
      </Wrapper>
    </main>
  );
};

export default Login;
