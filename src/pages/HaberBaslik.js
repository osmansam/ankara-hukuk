import { React, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getBaslik } from "../features/haber/haberSlice";
import styled from "styled-components";

const HaberBaslik = () => {
  const [haberBaslik, setHaberBaslik] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { language } = useSelector((store) => store.bar);
  const { basliks } = useSelector((store) => store.haber);
  useEffect(() => {
    dispatch(getBaslik(id));
  }, []);
  useEffect(() => {
    const newBaslik = basliks.filter((baslik) => baslik.haberId === id);
    setHaberBaslik(newBaslik);
  }, [basliks]);
  if (basliks !== null && basliks !== undefined && basliks !== []) {
    return (
      <Wrapper>
        <div className="habers">
          <div className="habers-container">
            {haberBaslik?.map((baslik, index) => (
              <div key={index} className="haber">
                <div className="haber-info">
                  <h3>{language === "tr" ? baslik.titleTr : baslik.titleEn}</h3>
                  <p>
                    {language === "tr" ? baslik.contentTr : baslik.contentEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
};
const Wrapper = styled.div``;

export default HaberBaslik;
