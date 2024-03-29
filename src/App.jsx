import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import Maps from "./components/Maps";
import { FloatButton } from "antd";


export default function () {
  return (
    <div className="mask">
      <NavBar />
      <SearchBox />
      {/* <MainContent /> */}

      <Maps />
      <FloatButton />
      <Footer />
    </div>
  );
}
