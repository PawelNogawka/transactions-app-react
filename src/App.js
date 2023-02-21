
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
          <Route path="/signup">
            {!user ? <Signup /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
