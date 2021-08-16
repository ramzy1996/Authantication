import logo from "./logo.svg";
import "./App.css";
import Login from "./auth/login";
import Register from "./auth/register";
import { Route, Switch } from "react-router-dom";
import ProtectedRouter from "./auth/protected";
import Home from "./auth/home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRouter exact path="/home" component={Home} />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
