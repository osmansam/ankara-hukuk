import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import AddBar from "./pages/AddBar";
import AddInfo from "./pages/AddInfo";
import AddLawyer from "./pages/AddLawyer";
import AddLink from "./pages/AddLink";
import AddMuvekkil from "./pages/AddMuvekkil";
import AddHaber from "./pages/AddHaber";
import Habers from "./pages/Habers";
import Haber from "./pages/Haber";
import HaberBaslik from "./pages/HaberBaslik";
import Muvekkil from "./pages/Muvekkil";
import SiteTasarim from "./pages/SiteTasarim";
import Home from "./pages/Home";
import News from "./pages/News";
import Works from "./pages/Works";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import HumanResources from "./pages/HumanResources";
import Navbar from "./components/Navbar";
import NavbarBackend from "./components/NavbarBackend";
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
          <NavbarBackend />
          <AddBar />
        </Route>
        <Route path="/add-info" exact>
          <NavbarBackend />
          <AddInfo />
        </Route>
        <Route path="/add-lawyer" exact>
          <NavbarBackend />
          <AddLawyer />
        </Route>
        <Route path="/add-link" exact>
          <NavbarBackend />
          <AddLink />
        </Route>
        <Route path="/add-haber" exact>
          <NavbarBackend />
          <AddHaber />
        </Route>
        <Route path="/add-muvekkil" exact>
          <NavbarBackend />
          <AddMuvekkil />
        </Route>
        <Route path="/site-tasarim" exact>
          <NavbarBackend />
          <SiteTasarim />
        </Route>
        <Route path="/habers" exact>
          <NavbarBackend />
          <Habers />
        </Route>
        <Route path="/haber/:id" exact>
          <Navbar />
          <Haber />
          <Footer />
        </Route>
        <Route path="/habers/baslik/:id" exact>
          <NavbarBackend />
          <HaberBaslik />
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
          <NavbarBackend />
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
