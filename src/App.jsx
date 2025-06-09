import Navbar from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import HomePage from "./HomePage.jsx";

import ContactPage from "./ContactPage.jsx";
import contactData from "./data/testingContactPageData.json"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




import ItemContainer from "./itemArticalPost.jsx";
import Sidebar from "./sidebar.jsx";
import thedate from "./testingInfo.json";
import MainArea from "./mainArea.jsx";


function App() {
  return (
      <Routes>
        <Route
          path="/" 
          element={
            <>
              <Navbar />
              <br />
              <HomePage />
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
              <ContactPage contactPageInfo={contactData}/>
              <br />
              <Footer />
            </>
        } />
      </Routes>
  );
}

export default App;