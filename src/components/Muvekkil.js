import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { setEditMuvekkil } from "../features/muvekkil/muvekkilSlice";
import { useDispatch } from "react-redux";
import { setId } from "../features/muvekkil/muvekkilSlice";

const Muvekkil = ({ muvekkil }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="muvekkil">
        <div className="table-row">
          <div className="table-cell">{muvekkil.ad}</div>
          <div className="table-cell">{muvekkil.soyad}</div>
          <div className="table-cell">{muvekkil.tc}</div>
          <div className="table-cell">{muvekkil.telefon}</div>
          {/* <button
            onClick={() => {
              dispatch(setEditMuvekkil(muvekkil));
              dispatch(setId(muvekkil._id));
              history.push("/add-muvekkil");
            }}
          >
            Edit
          </button> */}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .muvekkil {
    display: table;
    border-collapse: collapse;
    width: 80%;
    margin: 0 auto;
    table-layout: fixed;
  }
  .table-row {
    display: table-row;
    width: 100%;
  }
  .table-cell {
    display: table-cell;
    border: 1px solid black;
    padding: 10px;
    width: 100px; /* set the width of cells */
  }
`;

export default Muvekkil;
