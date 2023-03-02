import { React, useState, useEffect } from "react";
import Section from "../components/Section";
import Teambar from "../components/Teambar";
import { useSelector, useDispatch } from "react-redux";
import { getBars } from "../features/bar/barSlice";
import styled from "styled-components";

const Works = () => {
  const dispatch = useDispatch();
  const { bars } = useSelector((store) => store.bar);
  const { language, activeTab } = useSelector((store) => store.bar);
  // const [worksBar, setWorksBar] = useState([]);
  // const [worksInfo, setWorksInfo] = useState([]);
  // const [workItem, setWorkItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const type = "Work";
    dispatch(getBars(type));
  }, [dispatch]);

  // React.useEffect(() => {
  //   setWorkItem(worksInfo.find((item) => item._id === activeTab));
  // }, [activeTab]);

  return (
    <Wrapper>
      <Section props="works" />
      <div className="team">
        <Teambar props={bars} />
        {/* {workItem &&
            <div  className="works-info-center">
              <h3 >{language ==='tr'?workItem.headerTr:workItem.headerEn}</h3>
              {language ==='tr'?workItem.infoTr.split("\n").map(p => <p >{p}</p>):workItem.infoEn.split("\n").map(p => <p>{p}</p>)}
            </div>
          } */}
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
    display: flex;
    flex-wrap: row wrap;
    justify-content: space-evenly;
    align-content: center;
    width: 100%;
    margin-top: 4em;
    height: 100%;
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
