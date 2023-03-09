import { React, useEffect } from "react";
import Section from "../components/Section";
import HaberContainer from "../components/HaberContainer";
import SearchContainer from "../components/SearchContainer";
import { useSelector, useDispatch } from "react-redux";
import { getAllHabers, changePage } from "../features/search/searchSlice";
import styled from "styled-components";
const News = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.bar);
  const { page, numberOfPages } = useSelector((state) => state.search);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { habers } = useSelector((store) => store.search);
  useEffect(() => {
    dispatch(getAllHabers());
    dispatch(changePage(1));
  }, []);
  const handlePageChange = (pageNumber) => {
    dispatch(changePage(pageNumber));
    dispatch(getAllHabers());
  };
  return (
    <Wrapper>
      <main>
        <Section props="news" />
        <div className="search-container">
          <SearchContainer />
        </div>
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
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .search-container {
    margin-top: 4rem;
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    margin-left: 2rem;
  }
  .habers-container {
    margin-left: 2rem;
    margin-top: 2rem;
    width: 80%;
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

export default News;
