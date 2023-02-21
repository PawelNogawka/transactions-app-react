import React from "react";

import { useCollection } from "../../hooks/useCollection";

import HomeForm from "./HomeForm";
import Wrapper from "../../components/Ui/Wrapper";
import TransactionsList from "./TransactionsList";

import classes from "./Home.module.scss";
import { useAuthContext } from "../../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  return (
    <main>
      <Wrapper>
        <div className={classes.home}>
          <section className={classes.left}>
            {error && <p>{error}</p>}
            {documents && <TransactionsList transactions={documents} />}
          </section>
          <section className={classes.right}>
            <HomeForm uid={user.uid} />
          </section>
        </div>
      </Wrapper>
    </main>
  );
};

export default Home;
