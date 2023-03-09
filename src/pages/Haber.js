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
    return (
      <Wrapper>
        <div className="haber">
          <h1 className="haber-title">{haber.titleTr}</h1>
          <p className="haber-content">{haber.contentTr}</p>
          {baslik?.map((item) => {
            return (
              <div className="baslik">
                {item.titleTr && (
                  <h3 className="baslik-title">{item.titleTr}</h3>
                )}
                <div className="baslik-row">
                  {item.image && (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                      className="baslik-image"
                      src={item.image}
                      alt="image"
                      style={{
                        width: `${item.imageWidth}px`,
                        height: `${item.imageHeight}px`,
                      }}
                    />
                  )}
                  <p className="baslik-content">{item.contentTr}</p>
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
  .haber {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 3rem;
    margin-top: 5rem;
    margin-left: 3rem;
  }
  .haber-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-left: 4rem;
    text-transform: capitalize;
  }
  .baslik {
    margin-top: 1rem;
  }
  .baslik-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 3rem;
  }
  .baslik-image {
    display: block;
    margin-right: 1rem;
  }
  .baslik-title {
    margin-bottom: 0.8rem;
    text-transform: capitalize;
    margin-left: 1.6rem;
  }
  .baslik-content,
  .haber-content {
    margin-bottom: 0.4rem;
    text-indent: 1rem;
    margin-right: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    /* other styles */
  }
  .haber-content {
    margin-left: 2rem;
  }
`;

export default Haber;
