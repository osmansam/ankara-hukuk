import { React, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllHabers } from "../features/search/searchSlice";
import HaberContainer from "../components/HaberContainer";
import styled from "styled-components";

const Habers = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { language } = useSelector((store) => store.bar);
  const { habers } = useSelector((store) => store.search);
  useEffect(() => {
    dispatch(getAllHabers());
  }, []);

  return (
    <Wrapper>
      <div className="habers">
        <div className="habers-container">
          <HaberContainer habers={habers} />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default Habers;
