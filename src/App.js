import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import AddBar from "./pages/AddBar";
import AddInfo from "./pages/AddInfo";
import AddLawyer from "./pages/AddLawyer";
import AddLink from "./pages/AddLink";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import HumanResources from "./pages/HumanResources";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Navbar />
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
        <Route path="/add-lawyer" exact>
          <AddLawyer />
        </Route>
        <Route path="/add-link" exact>
          <AddLink />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/works" exact>
          <Works />
        </Route>
        <Route path="/ourteam" exact>
          <OurTeam />
        </Route>
        <Route path="/humanresources" exact>
          <HumanResources />
        </Route>
      </Switch>
      <ToastContainer position="top-center" />
      <Footer />
    </Router>
  );
}

export default App;
