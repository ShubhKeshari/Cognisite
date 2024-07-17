import React from "react";

import { Route, Routes } from "react-router-dom";
import { AddActivity } from "../Pages/AddActivity";
import { Error } from "../Pages/Error";
import ChartComponent from "../components/ChartComponent";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ChartComponent />}></Route>
      <Route path="/addActivity" element={<AddActivity />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};

export { AllRoutes };
