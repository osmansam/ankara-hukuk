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
      </Wrapper>
    );
  }
};

const Wrapper = styled.div``;

export default Muvekkil;
