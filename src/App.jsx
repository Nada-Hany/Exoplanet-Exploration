import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Planet from "./component/Planet";
import Main from "./pages/Main";
import "./App.css";
import Navbar from "./component/Navbar";
import Background from "./component/Background";
import Page1_info from "./pages/Page1_info";
import Story from "./pages/Story";
import ChallengesPage from './pages/ChallengesPage.jsx'

function App() {
  const [planets, setPlanet] = useState("first");

  return (

    <BrowserRouter>
      <Background planets={planets} setPlanet={setPlanet} />
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={<Main planets={planets} setPlanet={setPlanet} />}
        />
        <Route path="/story" element={<Story />} />
        <Route path="/challenges" element={<ChallengesPage />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
