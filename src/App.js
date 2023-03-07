import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import AddBar from "./pages/AddBar";
import AddInfo from "./pages/AddInfo";
import AddLawyer from "./pages/AddLawyer";
import AddLink from "./pages/AddLink";
import AddMuvekkil from "./pages/AddMuvekkil";
import Muvekkil from "./pages/Muvekkil";
import Home from "./pages/Home";
import News from "./pages/News";
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
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <Home />
          <Footer />
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
        <Route path="/add-muvekkil" exact>
          <AddMuvekkil />
        </Route>
        <Route path="/about" exact>
          <Navbar />
          <About />
          <Footer />
        </Route>
        <Route path="/news" exact>
          <Navbar />
          <News />
          <Footer />
        </Route>
        <Route path="/muvekkil" exact>
          <Muvekkil />
        </Route>
        <Route path="/works" exact>
          <Navbar />
          <Works />
          <Footer />
        </Route>
        <Route path="/ourteam" exact>
          <Navbar />
          <OurTeam />
          <Footer />
        </Route>
        <Route path="/humanresources" exact>
          <Navbar />
          <HumanResources />
          <Footer />
        </Route>
      </Switch>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
