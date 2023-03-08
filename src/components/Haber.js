import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Haber = ({ haber }) => {
  const history = useHistory();
  const { image, titleTr, titleEn, textTr, textEn, date } = haber;
  const { language } = useSelector((store) => store.bar);
  const handleHaberClick = () => {
    history.push(`/habers/baslik/${haber._id}`);
  };
  return (
    <Wrapper>
      <div className="haber" onClick={handleHaberClick}>
        <div className="haber-img">
          <img src={image} alt="haber" />
        </div>
        <div className="haber-info">
          <h3>{language === "tr" ? titleTr : titleEn}</h3>
          <p>{language === "tr" ? textTr : textEn}</p>
          <p>{date}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Haber;
