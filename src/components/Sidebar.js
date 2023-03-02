import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeSideBar, setActiveNav } from "../features/global/globalSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSideBarOpen, activeNav, language } = useSelector(
    (store) => store.bar
  );
  const { links } = useSelector((store) => store.link);

  return (
    <Wrapper>
      <aside
        className={`${
          isSideBarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
        }`}
      >
        <div className="sidebar">
          <button
            className="close-btn"
            onClick={() => dispatch(closeSideBar())}
          >
            <FaTimes />
          </button>
          <ul className="sidebar-links">
            {links.map((item, index) => {
              const { en, tr, link } = item;
              return (
                <li
                  key={index}
                  className={`${activeNav === en ? "active-sidebar" : ""}`}
                >
                  <Link
                    to={link}
                    onClick={() => {
                      dispatch(setActiveNav(en));
                      dispatch(closeSideBar());
                    }}
                  >
                    {language === "tr" ? tr : en}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .sidebar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    visibility: hidden;
    z-index: -1;
    transition: var(--transition);
    transform: scale(0);
    background: rgba(0, 0, 0, 0.5);
  }
  .sidebar-wrapper.show {
    visibility: visible;
    z-index: 2;
    transform: scale(1);
  }
  .sidebar {
    width: 90vw;
    height: 95vh;
    max-width: var(--fixed-width);
    background: var(--clr-white);
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
    position: relative;
    padding: 4rem 2rem;
  }

  .sidebar-links {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-content: center;
    height: 100%;
    width: 100%;
    text-transform: capitalize;
    color: pink !important;
    border: 2px solid black;
  }
  .sidebar-links li {
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 2px solid black;
  }
  .sidebar-links a {
    color: black;
  }
  .sidebar-links a:hover {
    color: red;
  }
  .active-sidebar {
    background-color: #9f000f;
    color: white !important;
    width: 100;
    border-radius: 0.2em;
  }
  .active-sidebar a {
    color: white;
  }
  .close-btn {
    margin-top: -12em;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  @media screen and (min-width: 800px) {
    .sidebar-wrapper {
      display: none;
    }
  }
  @media screen and (max-width: 801px) {
    .section-img img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  }
`;

export default Sidebar;
