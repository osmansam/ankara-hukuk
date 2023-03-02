import { React, useState, useEffect } from "react";
import Section from "../components/Section";
import Teambar from "../components/Teambar";
import { useSelector, useDispatch } from "react-redux";
import { getBars, setActiveTab } from "../features/bar/barSlice";
import { getInfos } from "../features/info/infoSlice";
import styled from "styled-components";

const Works = () => {
  const dispatch = useDispatch();
  const { bars } = useSelector((store) => store.bar);
  const { infos } = useSelector((store) => store.info);
  const { language, activeTab } = useSelector((store) => store.bar);

  const [workItem, setWorkItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const type = "Work";
    dispatch(getBars(type));
    dispatch(getInfos(type));
  }, [dispatch]);
  useEffect(() => {
    if (bars.length > 0) {
      dispatch(setActiveTab(bars[0].categoryTr));
    }
  }, [bars]);
  useEffect(() => {
    setWorkItem(infos?.find((item) => item.headerTr === activeTab));
  }, [activeTab]);

  return (
    <Wrapper>
      <Section props="works" />
      <div className="team">
        <div className="gridItem1">
          <Teambar props={bars} />
        </div>
        {workItem && (
          <div className="works-info-center gridItem2">
            <h3>{language === "tr" ? workItem.headerTr : workItem.headerEn}</h3>
            {language === "tr"
              ? workItem.infoTr.split("\n").map((p) => <p>{p}</p>)
              : workItem.infoEn.split("\n").map((p) => <p>{p}</p>)}
          </div>
        )}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  /* display: flex;
  flex-wrap: row wrap;
  justify-content: center;
  align-content: center;
  height: auto;
  min-width: 800px;
  width: 100%; */
  .team {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-left: 2em;
    justify-content: center;
    align-content: center;
    width: 80%
    margin: 4em auto;
    height: 100%;
    border: 2px dashed rgba(114, 186, 94, 0.35);
  }
  .gridItem1 {
    border: 2px solid red;
    box-sizing: border-box;
    padding: 1rem;
  }
  .gridItem2 {
    border: 2px solid blue;
    box-sizing: border-box;
    padding: 1rem;
  }
  @media screen and (max-width: 801px) {
    .team {
      flex-flow: row wrap;
    }
  }
  .works-info-center {
    width: 60%;
    margin-top: 2em;
  }
  .works-info-center p {
    text-indent: 1em;
    margin: 2em 1em;
    font-size: 0.9em;
  }
`;
export default Works;
