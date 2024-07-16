import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import LoginPage from "../src/pages/Auth";
import SignupPage from "../src/pages/User";
import MainPage from "../src/pages/Main";
import DataPage from "../src/pages/Data";

import Layout from "../src/navigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/data" element={<DataPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;