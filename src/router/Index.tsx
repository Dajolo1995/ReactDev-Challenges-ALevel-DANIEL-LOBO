import React from "react";
import Home from "../view/Home";
import { Route, Routes } from "react-router-dom";
import FormTask from "../view/FormTask";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/formTask" element={<FormTask />}></Route>
    </Routes>
  );
};

export default Index;
