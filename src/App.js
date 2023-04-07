import React from "react";
import Navbar from "./Components/Navbar";
import MyJourney from "./Components/MyJourney";
import Banner from "./Components/Banner";
import Education from "./Components/Education";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";
import Work from "./Components/Work";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <About />
      <Education />
      <MyJourney />
      <Work/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
