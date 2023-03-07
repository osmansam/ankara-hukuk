import { React, useEffect } from "react";
import Section from "../components/Section";
import { useSelector } from "react-redux";

const News = () => {
  const { language } = useSelector((state) => state.bar);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Section props="news" />
    </main>
  );
};

export default News;
