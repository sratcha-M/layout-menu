import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@pages/Home"));
const Page2Page = lazy(() => import("@pages/Page2"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/page2" element={<Page2Page />} />
    </Routes>
  );
};

export default Router;
