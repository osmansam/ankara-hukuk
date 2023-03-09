import { React, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllHabers } from "../features/search/searchSlice";
import { getBaslik } from "../features/haber/haberSlice";
import styled from "styled-components";

const Haber = () => {
  const [haber, setHaber] = useState();
  const [baslik, setBaslik] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { language } = useSelector((store) => store.bar);
  const { habers } = useSelector((store) => store.search);
  const { basliks } = useSelector((store) => store.haber);
  useEffect(() => {
    dispatch(getAllHabers());
    dispatch(getBaslik());
  }, []);
  useEffect(() => {
    const newHaber = habers?.filter((haber) => haber._id === id);
    const newBaslik = basliks?.filter((baslik) => baslik.haberId === id);
    setHaber(newHaber[0]);
    setBaslik(newBaslik);
  }, [habers, basliks]);

  if (haber) {
    return <h1>{haber.titleTr}</h1>;
  }
  return <div>hata var</div>;
};

const Wrapper = styled.div``;

export default Haber;
