import { React, useState, useEffect } from "react";
import Section from "../components/Section";
import Teambar from "../components/Teambar";
import { useSelector, useDispatch } from "react-redux";
import { getBars, setActiveTab } from "../features/bar/barSlice";
import { getInfos } from "../features/info/infoSlice";
import styled from "styled-components";

const About = () => {
  const dispatch = useDispatch();
  const { bars } = useSelector((store) => store.bar);
  const { infos } = useSelector((store) => store.info);
  const { language, activeTab } = useSelector((store) => store.bar);

  const [aboutItem, setAboutItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const type = "About Us";
    dispatch(getBars(type));
    dispatch(getInfos(type));
  }, [dispatch]);
  useEffect(() => {
    if (bars.length > 0) {
      dispatch(setActiveTab(bars[0].categoryTr));
    }
  }, [bars]);
  useEffect(() => {
    setAboutItem(infos?.find((item) => item.headerTr === activeTab));
  }, [activeTab]);

  return (
    <Wrapper>
      <Section props="about" />
      <div className="team">
        <div className="gridItem1">
          <Teambar props={bars} />
        </div>
        {aboutItem && (
          <div className="about-info-center gridItem2">
            <h3>
              {language === "tr" ? aboutItem.headerTr : aboutItem.headerEn}
            </h3>
            {language === "tr"
              ? aboutItem.infoTr
                  .split("\n")
                  .map((p, index) => <p key={index}>{p}</p>)
              : aboutItem.infoEn
                  .split("\n")
                  .map((p, index) => <p key={index}>{p}</p>)}
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
    grid-template-columns: 0.5fr 100%;
    margin-left: 2em;
    justify-content: center;
    align-content: center;
    column-gap: 2em;
    width: 100%;
    margin-top: 4em;
    height: 100%;
  }
  .gridItem1 {
    box-sizing: border-box;
    padding: 1rem;
    margin-left: 20em;
  }
  .gridItem2 {
    box-sizing: border-box;
    padding: 1rem;
    margin-left: 6em;
  }
  @media screen and (max-width: 801px) {
    .team {
      flex-flow: row wrap;
    }
  }
  .about-info-center {
    width: 60%;
    margin-top: 2em;
  }
  .about-info-center p {
    text-indent: 1em;
    margin: 2em 1em;
    font-size: 0.9em;
  }
`;
export default About;
