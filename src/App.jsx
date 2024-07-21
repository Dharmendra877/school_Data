import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./conponents/navigation/Navigation";
import AddSchool from "./conponents/schoolForm/AddSchool";
import HomePage from "./pages/HomePage";
import SchoolPage from "./pages/SchoolPage";
import ShowSchools from "./pages/ShowSchools";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AddSchoolData" element={<AddSchool />} />
          <Route path="/ShowSchools" element={<ShowSchools />} />
          {/* <Route path="/SchoolPage" element={<SchoolPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
