import React from "react";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <h1>home</h1>;
};

export default Home;
