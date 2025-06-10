import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/nav.jsx";
import Footer from "./components/footer.jsx";

import ItemContainer from "./itemArticalPost.jsx";
import Sidebar from "./sidebar.jsx";
import theData from "./testingInfo.json";
import MainArea from "./mainArea.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route
          path="/" 
          element={
            <>
              <Navbar />
              <br />
              <MainArea />
              <br />
              <Footer />
            </>
        } />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <br />
              {/* <ContactPage contactPageInfo={contactData}/> */}
              <br />
              <Footer />
            </>
        } />
      </Routes>);
}

export default App; 