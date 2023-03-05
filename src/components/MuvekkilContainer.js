import React from "react";
import styled from "styled-components";
import Muvekkil from "./Muvekkil";

const MuvekkilContainer = ({ muvekkils }) => {
  return (
    <Wrapper>
      {muvekkils.map((muvekkil, index) => (
        <Muvekkil key={index} muvekkil={muvekkil} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2rem 0;
  width: 100%;
`;

export default MuvekkilContainer;
