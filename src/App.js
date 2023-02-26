import React from "react";
import Navbar from "./Components/Navbar";
import MyJourney from "./Components/MyJourney";
import Banner from "./Components/Banner";
import Education from "./Components/Education";
import About from "./Components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Education />
      <MyJourney />
    </div>
  );
}

export default App;
