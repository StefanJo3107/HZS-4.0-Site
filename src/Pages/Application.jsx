import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ApplicationTop from "../Components/ApplicationTop/ApplicationTop";
import ApplicationRender from "../Components/ApplicationRender/ApplicationRender";

const Application = () => {
  return (
    <>
      <Navbar links={[]} mainLink="" mainLinkName="Početna" />
      <ApplicationTop />
      <ApplicationRender />
      <Footer transition={false} navigation={false} />
    </>
  );
};

export default Application;
