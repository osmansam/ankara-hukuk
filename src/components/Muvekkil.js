import { React, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  setEditMuvekkil,
  setId,
  deleteMuvekkil,
  getMuvekkils,
} from "../features/muvekkil/muvekkilSlice";
import { useDispatch } from "react-redux";
import { MdOutlineEditNote } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
const Muvekkil = ({ muvekkil }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setId(muvekkil._id));
  }, [dispatch, muvekkil]);
  return (
    <Wrapper>
      <div className="muvekkil">
        <div className="table-row">
          <div className="table-cell">{muvekkil.ad}</div>
          <div className="table-cell">{muvekkil.soyad}</div>
          <div className="table-cell">{muvekkil.tc}</div>
          <div className="table-cell">{muvekkil.telefon}</div>
          <div className="table-cell email">{muvekkil.email}</div>
          <div className="table-cell">{muvekkil.dosyaMahkemesi}</div>
          <div className="table-cell">{muvekkil.dosyaNo}</div>

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
                dispatch(setId(muvekkil._id));
                dispatch(setEditMuvekkil(muvekkil));
                history.push("/add-muvekkil");
              }}
            >
              <MdOutlineEditNote />
            </button>
            {/* after delete there will be are your sure message */}
            <button
              className="button"
              onClick={async () => {
                await dispatch(deleteMuvekkil(muvekkil));
                await dispatch(getMuvekkils());
              }}
            >
              <AiFillDelete />
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
    width: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .button {
    width: 40px;
    height: 40px;
    border-radius: 10%;
    background-color: #f5f5f5;
    font-size: 24px;
  }
  .email {
    text-transform: lowercase;
  }
`;

export default Muvekkil;
