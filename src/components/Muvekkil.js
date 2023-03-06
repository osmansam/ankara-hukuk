import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { setEditMuvekkil } from "../features/muvekkil/muvekkilSlice";
import { useDispatch } from "react-redux";
import { setId } from "../features/muvekkil/muvekkilSlice";
import { MdOutlineEditNote } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
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
          <div className="button-container">
            <button
              className="button"
              onClick={() => {
                dispatch(setEditMuvekkil(muvekkil));
                dispatch(setId(muvekkil._id));
                history.push("/add-muvekkil");
              }}
            >
              <MdOutlineEditNote />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .muvekkil {
    display: flex;
    flex-direction: row;
  }

  .table-row {
    display: flex;
    flex-direction: row;
  }

  .button-container {
    width: 20vh;

    margin-left: 0.2em;
  }
  .button {
    width: 40px;
    height: 40px;
    border-radius: 10%;
    background-color: #f5f5f5;
    font-size: 24px;
  }
`;

export default Muvekkil;
