import { React, useEffect } from "react";
import Section from "../components/Section";
import HaberContainer from "../components/HaberContainer";
import { useSelector, useDispatch } from "react-redux";
import { getAllHabers } from "../features/haber/haberSlice";
import styled from "styled-components";
const News = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.bar);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { habers } = useSelector((store) => store.haber);
  useEffect(() => {
    dispatch(getAllHabers());
  }, []);
  return (
    <Wrapper>
      <main>
        <Section props="news" />
        <div className="habers-container">
          <HaberContainer habers={habers} />
        </div>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .habers-container {
    margin-top: 4rem;
    width: 80%;
  }
`;

export default News;
