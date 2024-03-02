import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);

  const handleProgress = (progress) => {
    setProgress(progress);
  };

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar height={4} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={handleProgress} key="general" pagesize={6} category="general" />}
          />
          <Route
            exact
            path="/science"
            element={<News setProgress={handleProgress} key="science" pagesize={6} category="science" />}
          />
          <Route
            exact
            path="/business"
            element={<News setProgress={handleProgress} key="business" pagesize={6} category="business" />}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={handleProgress} key="sports" pagesize={6} category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={<News setProgress={handleProgress} key="technology" pagesize={6} category="technology" />}
          />
          <Route
            exact
            path="/health"
            element={<News setProgress={handleProgress} key="health" pagesize={6} category="health" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={handleProgress} key="entertainment" pagesize={6} category="entertainment" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
