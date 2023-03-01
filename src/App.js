import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import AddBar from "./pages/AddBar";
import AddInfo from "./pages/AddInfo";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/add-bar" exact>
          <AddBar />
        </Route>
        <Route path="/add-info" exact>
          <AddInfo />
        </Route>
      </Switch>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
