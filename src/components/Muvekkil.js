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
        <h4>{muvekkil.ad}</h4>
        <p>{muvekkil.soyad}</p>
        <button
          onClick={() => {
            dispatch(setEditMuvekkil(muvekkil));
            dispatch(setId(muvekkil._id));
            history.push("/add-muvekkil");
          }}
        >
          Edit
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .muvekkil {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #ccc;
    height: 200px;
    width: 200px;
  }
`;

export default Muvekkil;
