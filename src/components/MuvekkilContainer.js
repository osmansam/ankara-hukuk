import React from "react";
import styled from "styled-components";
import Muvekkil from "./Muvekkil";

const MuvekkilContainer = ({ muvekkils }) => {
  return (
    <Wrapper>
      <div className="table-container">
        <div className="table-header">
          <div className="table-cell">Ad</div>
          <div className="table-cell">Soyad</div>
          <div className="table-cell">Tc</div>
          <div className="table-cell">Telefon</div>
        </div>
        <div className="table">
          <div className="muvekkil">
            {muvekkils.map((muvekkil, index) => (
              <Muvekkil key={index} muvekkil={muvekkil} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 1em;
  margin-top: 3em;

  .table {
    display: table;
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
    table-layout: fixed;
  }
  .table-header {
    font-weight: bold;
    display: table-row;
  }
  .table-cell {
    display: table-cell;
    border: 1px solid black;
    padding: 10px;
    width: 37vh;
    text-transform: capitalize;
  }
  .muvekkil {
    display: table-row;
    width: 100%;
  }
`;

export default MuvekkilContainer;
