import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Section = ({ props }) => {
  const { language } = useSelector((state) => state.bar);
  const { links } = useSelector((state) => state.link);
  if (links.length === 0) return null;
  const { image, en, tr } = links.find((item) => item.en === props);
  return (
    <Wrapper>
      <section className={`section ${props}-section`}>
        <div>
          <img src={image} alt={en} />
          <div className="img-desc">
            <p>{language === "tr" ? tr : en}</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .section {
    width: 100%;
    margin-top: 2em;
    display: relative;
  }
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .img-desc {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    text-transform: uppercase;
    margin-top: -1em;
    width: fit-content;
    padding: 0.5em;
    border-radius: 0.4em;
    height: 2em;
    margin-left: 9em;
    background-color: black;
    color: #fff;
    z-index: 1;
  }
`;

export default Section;
