import React from "react";
import Footers from "../Client/Footer";
import Headers from "../Client/Header";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const LayoutMain = ({ children }) => {
  return (
    <>
      <Headers />
      <Content>
        <Outlet />
      </Content>
      <Footers />
    </>
  );
};

export default LayoutMain;
