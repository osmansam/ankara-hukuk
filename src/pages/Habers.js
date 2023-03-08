import { React, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllHabers } from "../features/haber/haberSlice";
import styled from "styled-components";

const Habers = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { language } = useSelector((store) => store.bar);
  const { habers } = useSelector((store) => store.haber);
  useEffect(() => {
    dispatch(getAllHabers());
  }, []);
};
