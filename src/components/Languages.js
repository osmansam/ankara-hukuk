import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../features/bar/barSlice";
import styled from "styled-components";

const Languages = () => {
  const { language } = useSelector((state) => state.bar);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="language-options">
        <ul className="languages">
          <li
            className={`${language === "tr" ? "active-language" : ""}`}
            onClick={() => {
              dispatch(setLanguage("tr"));
            }}
          >
            tr
          </li>
          <li
            className={`${language === "en" ? "active-language" : ""}`}
            onClick={() => {
              dispatch(setLanguage("en"));
            }}
          >
            en
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .language-options {
    /* border: 2px solid #000; */
    margin-right: 1em;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 10%;
  }
  .languages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: top;
    margin-top: 1em;
    gap: 1em;
    height: fit-content;
  }
  .languages li {
    transition: var(--mainTransition);
  }

  .languages li:hover {
    background-color: black;
    color: white;
    border-radius: 0.2em;
  }
  .active-language {
    background-color: black;
    color: white;
    border-radius: 0.2em;
  }
`;
export default Languages;
