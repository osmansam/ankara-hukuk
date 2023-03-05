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
  .muvekkil {
    display: table;
    border-collapse: collapse;
    width: 100%;
  }
`;

export default MuvekkilContainer;
