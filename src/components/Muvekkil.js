import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Muvekkil = ({ muvekkil }) => {
  const history = useHistory();
  return (
    <Wrapper onClick={() => history.push(`/muvekkil/${muvekkil._id}`)}>
      <div className="muvekkil">
        <h4>{muvekkil.ad}</h4>
        <p>{muvekkil.soyad}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .muvekkil {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
  }
`;

export default Muvekkil;
