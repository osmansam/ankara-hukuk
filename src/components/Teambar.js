import React from "react";
import { useSelector } from "react-redux";
import { setActiveTab } from "../../features/bar/barSlice";
import styled from "styled-components";

const Teambar = ({ props }) => {
  const { activeTab, language } = useSelector((state) => state.bar);

  const height = React.useRef("");
  React.useEffect(() => {
    if (height.current) {
      height.current.style.height = `${props.length * 25 + 50}px`;
    }
    setActiveTab(props[0]._id);
  }, []);

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
                  activeTab === _id ? "active-bar" : ""
                }`}
                onClick={() => {
                  setActiveTab(_id);
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
    padding-left: 3.5em;
    cursor: pointer;
  }
  .teambar-tab:hover {
    display: flex;
    color: red;
    text-align: center;
  }
`;

export default Teambar;
