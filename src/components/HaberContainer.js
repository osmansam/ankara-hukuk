import { React, useEffect } from "react";
import styled from "styled-components";
import Haber from "./Haber";
import { useDispatch, useSelector } from "react-redux";

const HaberContainer = ({ habers }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="haber-container">
        <div className="haber">
          {habers.map((haber, index) => (
            <Haber key={index} haber={haber} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HaberContainer;
