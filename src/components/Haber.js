import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserFromLocalStorage } from "../utils/localStorage";

const Haber = ({ haber }) => {
  const history = useHistory();
  const { image, titleTr, titleEn, contentTr, contentEn, date } = haber;
  const user = getUserFromLocalStorage();
  const { language } = useSelector((store) => store.bar);
  const handleHaberClick = () => {
    history.push(`/habers/baslik/${haber._id}`);
  };
  const handleUserClick = () => {
    history.push(`/haber`);
  };
  return (
    <Wrapper>
      <div
        className="haber"
        onClick={user.role === "admin" ? handleHaberClick : handleUserClick}
      >
        <div className="haber-info">
          <h3>{language === "tr" ? titleTr : titleEn}</h3>
          <p>{language === "tr" ? contentTr : contentEn}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .haber {
    width: 100%;
    height: 12vh;
    text-transform: capitalize;
    border: 1px solid #ccc;
    margin-top: 1rem;
    margin-left: 1rem;
  }
  .haber-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    margin-left: 3rem;
  }
`;

export default Haber;
