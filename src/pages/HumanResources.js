import { React, useEffect } from "react";
import Section from "../components/Section";
import { useSelector } from "react-redux";

const HumanResources = () => {
  const { language } = useSelector((state) => state.bar);
  const { infos } = useSelector((state) => state.info);
  const humanResourceInfo = infos.filter(
    (item) => item.type === "Human Resources"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Section props="human resources" />
      <div className="humanresources-info-center">
        {humanResourceInfo.map((item, index) => {
          const { id, headerEn, headerTr, infoEn, infoTr } = item;
          return (
            <div className="human-resources-paragraphs" key={index}>
              <h3>{language === "tr" ? headerTr : headerEn}</h3>
              {language === "tr"
                ? infoTr.split("\n").map((p) => <p>{p}</p>)
                : infoEn.split("\n").map((p) => <p>{p}</p>)}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default HumanResources;
