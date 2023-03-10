import { React, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllHabers, changePage } from "../features/search/searchSlice";
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
  const { page, numberOfPages } = useSelector((state) => state.search);
  const handlePageChange = (pageNumber) => {
    dispatch(changePage(pageNumber));
    dispatch(getAllHabers());
  };
  return (
    <Wrapper>
      <div className="habers">
        <button
          className="add-haber"
          onClick={() => {
            history.push("/add-haber");
          }}
        >
          {" "}
          Haber Ekle
        </button>
        <div className="habers-container">
          <HaberContainer habers={habers} />
        </div>
        <div className="page-container">
          {numberOfPages > 1 &&
            Array.from({ length: numberOfPages }, (_, i) => {
              const pageNumber = i + 1;
              return (
                <button
                  key={pageNumber}
                  className={`${
                    page === pageNumber ? "btn-active" : "btn-page"
                  }`}
                  onClick={() => {
                    handlePageChange(pageNumber);
                  }}
                >
                  {pageNumber}
                </button>
              );
            })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .habers {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 5rem auto;
  }
  .add-haber {
    background-color: #fff;
    color: black;
    border: 1px solid black;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .page-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem;
  }
  .btn-active {
    background-color: black;
    color: #fff;
    width: 1.3rem;
  }
  .btn-page {
    background-color: #fff;
    color: black;
    width: 1.3rem;
  }
`;

export default Habers;
