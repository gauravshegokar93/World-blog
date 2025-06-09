import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import HomePage from "./HomePage.jsx";
import ContactPage from "./ContactPage.jsx";
import contactData from "./data/testingContactPageData.json";

function App() {
  return (
    <Router>
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
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <br />
              <ContactPage contactPageInfo={contactData} />
              <br />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
