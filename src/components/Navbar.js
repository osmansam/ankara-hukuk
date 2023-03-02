import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import Languages from "../components/Languages";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getLinks } from "../features/link/linkSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { language, activeNav, setActiveNav, openSideBar } = useSelector(
    (store) => store.bar
  );

  const { links } = useSelector((store) => store.link);
  useEffect(() => {
    dispatch(getLinks());
  }, [dispatch]);
  console.log(links, "links");
  return (
    <Wrapper>
      <nav className="navbar">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="logo"
            onClick={() => {
              dispatch(setActiveNav("en"));
            }}
          />
        </Link>
        <div className="nav-center">
          <ul className="nav-links">
            {links?.map((item, index) => {
              const { en, tr, link } = item;
              return (
                <li key={index}>
                  <Link
                    className={`${activeNav === en ? "active-bar" : ""}`}
                    to={link}
                    onClick={() => {
                      dispatch(setActiveNav("en"));
                    }}
                  >
                    {language === "tr" ? tr : en}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          className="btn toggle-btn"
          onClick={() => dispatch(openSideBar())}
        >
          <FaBars />
        </button>
        <Languages />
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .navbar {
    height: 9rem;
    display: flex;
    /* border: 2px solid #000; */
    border-top: 4px solid black;
    text-transform: uppercase;
  }

  .nav-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: 0.75em;
    align-items: flex-end;
    width: 100%;
    /* border: 2px solid #000; */
  }
  .nav-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1em;
    margin-left: -1em;
  }

  .active-bar {
    color: white !important;
    background-color: #9f000f;
    border-radius: 0.5em;
  }
  .nav-links a {
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
  .nav-links a:hover {
    color: red;
  }
  .logo {
    /* border: 2px solid #000; */
    width: 5rem;
    margin-top: 1.5em;
    margin-left: 2em;
  }

  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    border-color: transparent;
    color: white;
    background: #222;
    cursor: pointer;
    transition: all 0.3s linear;
    height: 2.5em;
    margin-top: 8em;
    margin-right: -4em;
  }
  .btn:hover {
    background: hsl(210, 22%, 49%);
  }
  @media screen and (min-width: 800px) {
    .toggle-btn {
      display: none;
    }
  }
  @media screen and (max-width: 801px) {
    .nav-links {
      display: none;
    }
  }
`;

export default Navbar;
