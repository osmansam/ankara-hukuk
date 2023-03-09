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
    history.push(`/haber/${haber._id}`);
  };
  return (
    <Wrapper>
      <div className="border">
        <div
          className="haber"
          onClick={user.role === "admin" ? handleHaberClick : handleUserClick}
        >
          <div className="haber-info">
            <h2>{language === "tr" ? titleTr : titleEn}</h2>
            <p className="content">
              {language === "tr"
                ? `${contentTr.substring(0, 200)}...`
                : contentEn}
            </p>
          </div>
        </div>
        <button
          className="haber-btn"
          onClick={() => {
            history.push(`/habers/${haber._id}`);
          }}
        >
          Devami
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .haber {
    width: 90%;
    height: 20vh;
    text-transform: capitalize;
    margin-top: 1rem;
    margin-left: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .content {
    font-size: 0.9rem;
    text-indent: 1rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }
  .border {
    display: flex; /* Add this */
    justify-content: space-between; /* Add this */
    border-bottom: 1px solid #ccc;
  }
  .haber-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    margin-left: 3rem;
  }
  .haber-btn {
    margin-right: 1rem;
    margin-top: 6.5rem;
    background-color: #fff;
    border: 1px solid #ccc;
    color: black;
    height: 2rem;
    width: 4rem;
  }
`;

export default Haber;
