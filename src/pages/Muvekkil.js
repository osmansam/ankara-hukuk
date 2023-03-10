import { React, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MuvekkilContainer from "../components/MuvekkilContainer";
import styled from "styled-components";
import { getMuvekkils } from "../features/muvekkil/muvekkilSlice";

const Muvekkil = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { muvekkils } = useSelector((state) => state.muvekkil);
  useEffect(() => {
    dispatch(getMuvekkils());
  }, [dispatch]);

  if (muvekkils) {
    return (
      <Wrapper>
        <MuvekkilContainer muvekkils={muvekkils} />
        <button
          className=" add-muvekkil"
          onClick={() => {
            history.push("/add-muvekkil");
          }}
        >
          Muvekkil Ekle
        </button>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .add-muvekkil {
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
  }
`;

export default Muvekkil;
