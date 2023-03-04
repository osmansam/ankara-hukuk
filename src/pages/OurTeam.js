import { React, useEffect, useState } from "react";
import Section from "../components/Section";
import Lawyers from "../components/Lawyers";
import Teambar from "../components/Teambar";
import { setActiveTab, getBars } from "../features/bar/barSlice";
import { getLawyers } from "../features/lawyer/lawyerSlice";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
const OurTeam = () => {
  const dispatch = useDispatch();
  const { activeTab, bars } = useSelector((store) => store.bar);
  const [lawyerItem, setLawyerItem] = useState([]);
  const { lawyers } = useSelector((store) => store.lawyer);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //when the page opens fetch the lawyers and bars from the database
  useEffect(() => {
    const type = "Our Team";
    dispatch(getBars(type));
    dispatch(getLawyers());
  }, [dispatch]);
  //whenever the page opens and bars loaded we set the teambar-activebar to the first item
  useEffect(() => {
    if (bars.length > 0) {
      dispatch(setActiveTab(bars[0].categoryTr));
    }
  }, [bars]);
  //we take the correct item from the lawyers
  useEffect(() => {
    setLawyerItem(lawyers?.filter((item) => item.type === activeTab));
  }, [activeTab, lawyers]);

  return (
    <Wrapper>
      <Section props="our team" />
      <div className="team">
        <div className="gridItem1">
          <Teambar props={bars} />
        </div>
        <Lawyers className="gridItem2" props={lawyerItem} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
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
`;
export default OurTeam;
