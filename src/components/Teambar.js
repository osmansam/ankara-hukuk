import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../features/bar/barSlice";
import styled from "styled-components";

const Teambar = ({ props }) => {
  const dispatch = useDispatch();
  const { activeTab, language } = useSelector((state) => state.bar);

  const height = React.useRef("");
  React.useEffect(() => {
    if (props.length > 0) {
      if (height.current) {
        height.current.style.height = `${props.length * 25 + 50}px`;
      }
      dispatch(setActiveTab(props[0].categoryTr));
    }
  }, [props]);

  return (
    <Wrapper>
      <div className="teambar" ref={height}>
        <ul className="team-options">
          {props.map((item, index) => {
            const { _id, categoryEn, categoryTr } = item;
            return (
              <li
                key={index}
                className={`teambar-tab ${
                  activeTab === categoryTr ? "active-bar" : ""
                }`}
                onClick={() => {
                  dispatch(setActiveTab(categoryTr));
                }}
              >
                {language === "tr" ? categoryTr : categoryEn}
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .teambar {
    width: 270px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: column wrap;
    font-size: 0.8em;
    background-color: rgb(249, 245, 245);
    border-radius: 1.75em;
  }
  .team-options {
    display: flex;
    height: auto;
    width: 100%;
    flex-flow: column wrap;
    text-transform: capitalize;
  }

  .teambar-tab {
    height: 2em;
    display: flex;
    font-size: 0.8rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    cursor: pointer;
  }
  .teambar-tab:hover {
    display: flex;
    color: red;
    text-align: center;
  }
  .active-bar {
    color: white !important;
    background-color: #9f000f;
    border-radius: 0.5em;
    width: 80%;
  }
`;

export default Teambar;
