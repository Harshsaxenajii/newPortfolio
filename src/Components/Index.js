import React from "react";
import Navbar from "./Navbar";
import MyJourney from "./MyJourney";
import Banner from "./Banner";
import Education from "./Education";
import About from "./About";
import Footer from "./Footer";
import Work from "./Work";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Education />
      <MyJourney />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
