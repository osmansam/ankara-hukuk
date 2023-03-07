import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Lawyers = ({ props }) => {
  const { language } = useSelector((store) => store.bar);
  if (!props) return null;
  if (props.length > 0) {
    return (
      <Wrapper>
        <div className="lawyers">
          {props.map((item, index) => {
            const {
              type,
              image,
              name,
              dutyTr,
              dutyEn,
              educationTr,
              educationEn,
              barAssociationTr,
              barAssociationEn,
              languagesTr,
              languagesEn,
              expertiseTr,
              expertiseEn,
              email,
            } = item;
            return (
              <div className="lawyer" key={index}>
                <img className="lawyer-image" src={image} alt="lawyer-image" />
                <div className="lawyer-info">
                  <h3>{name}</h3>
                  <h4>{language === "en" ? dutyEn : dutyTr}</h4>
                  <p>
                    <span className="bold-lawyer">
                      {language === "tr"
                        ? "eğitim:"
                        : "educational background:    "}
                    </span>{" "}
                    {language === "en" ? educationEn : educationTr}
                  </p>
                  <p>
                    <span className="bold-lawyer">
                      {language === "tr"
                        ? "baro kaydı: "
                        : "bar association registration:    "}
                    </span>{" "}
                    {language === "en" ? barAssociationTr : barAssociationEn}
                  </p>
                  <p>
                    <span className="bold-lawyer">
                      {language === "tr"
                        ? "konuştuğu diller:"
                        : "foreign languages:    "}
                    </span>{" "}
                    {language === "en" ? languagesEn : languagesTr}
                  </p>
                  <p>
                    <span className="bold-lawyer">
                      {language === "tr"
                        ? "uzmanlık alanları:"
                        : "fields of expertise:    "}
                    </span>{" "}
                    {language === "en" ? expertiseEn : expertiseTr}
                  </p>
                  <p className="email">
                    <span className="bold-lawyer ">e-mail:</span> {email}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    );
  }
};
const Wrapper = styled.div`
  .lawyer {
    display: flex;
    flex-wrap: column wrap;
    align-content: center;
    margin-bottom: 3em;
    text-transform: capitalize;
  }
  .lawyer-image {
    width: 10rem;
    margin-right: 2em;
    border-radius: 2em;
  }
  .lawyer-info {
    margin-top: 0.6em;
  }
  .bold-lawyer {
    font-weight: 500;
    text-transform: capitalize;
  }
  .lawyer p {
    font-size: 0.7em;
    line-height: 1.1rem;
  }
  .lawyer h3 {
    font-size: 0.8rem;
  }
  .lawyer h4 {
    font-size: 0.7rem;
    margin-bottom: 1em;
    margin-top: 1em;
  }
  .email {
    text-transform: lowercase;
  }
`;
export default Lawyers;
