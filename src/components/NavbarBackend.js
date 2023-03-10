import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import logo from "../assets/logo.png";

const NavbarBackend = () => {
  return (
    <Wrapper>
      <nav className="navbar-backend">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="navbar-center">
          <ul className="navbar-links">
            <li>
              <Link to="/habers">Haberler</Link>
            </li>
            <li>
              <Link to="/muvekkil">Muvekkiller</Link>
            </li>
            <li>
              <Link to="/site-tasarim">Site Tasarim</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .navbar-backend {
    height: 9rem;
    display: flex;
    /* border: 2px solid #000; */
    border-top: 4px solid black;
    text-transform: uppercase;
  }
  .navbar-links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .navbar-links a {
    color: black;
    text-transform: capitalize;
    display: inline-block;
    font-weight: bold;
    margin-right: 0.5rem;
    font-weight: 400;
    letter-spacing: 2px;
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    text-align: left;
    text-transform: uppercase;
  }
  .navbar-links a:hover {
    color: red;
  }
  .navbar-center {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 0.75em;
    align-items: flex-end;
    width: 100%;
    /* border: 2px solid #000; */
  }
  .logo {
    /* border: 2px solid #000; */
    width: 5rem;
    margin-top: 1.5em;
    margin-left: 2em;
  }
`;
export default NavbarBackend;
