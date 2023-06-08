import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";

const AppRouter = (isLoggedIn) => {
  return (
    <Router>
      <Routes>
        {isLoggedIn.isLoggedIn ? (
          <Route path="/" element={<Home />}></Route>
        ) : (
          <Route path="/" element={<Auth />}></Route>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
