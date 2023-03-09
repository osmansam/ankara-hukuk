import { React, useEffect } from "react";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllHabers,
  clearFilters,
  handleFilters,
  changePage,
} from "../features/search/searchSlice.js";

const SearchContainer = () => {
  const {
    search,
    searchStatus,
    searchType,
    sort,
    page,
    isLoading,
    sortOptions,
  } = useSelector((state) => state.search);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllHabers());
  };
  const handleSearch = (e) => {
    const { name, value } = e.target;
    dispatch(handleFilters({ name, value }));
  };
  const handlePageChange = (e) => {
    const { value } = e.target;
    dispatch(changePage(value));
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-center">
          {/* search  */}
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />

          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <div className="button-container">
            <button
              type="submit"
              onClick={() => {
                dispatch(getAllHabers());
              }}
            >
              filter
            </button>
            <button
              type="button "
              disabled={isLoading}
              onClick={() => {
                dispatch(clearFilters());
                dispatch(getAllHabers());
              }}
            >
              clear filters
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .form {
    width: 120vh;
  }

  .form-center {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
  }
  button {
    width: 4rem;
    height: 2rem;
    background-color: #fff;
    box-shadow: none;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    width: 20%;
  }
`;
export default SearchContainer;
