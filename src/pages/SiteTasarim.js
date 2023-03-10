import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const SiteTasarim = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <div className="site">
        <div className="button-container">
          <button
            className="btn"
            onClick={() => {
              history.push("/add-bar");
            }}
          >
            TeamBar ekle
          </button>
          <button
            className="btn"
            onClick={() => {
              history.push("/add-link");
            }}
          >
            Link ekle
          </button>
          <button
            className="btn"
            onClick={() => {
              history.push("/add-lawyer");
            }}
          >
            Lawyer ekle
          </button>
          <button
            className="btn"
            onClick={() => {
              history.push("/add-info");
            }}
          >
            info ekle
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default SiteTasarim;
