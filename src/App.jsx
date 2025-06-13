import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import HomePage from "./HomePage.jsx";

import ContactPage from "./ContactPage.jsx";
import contactData from "./data/testingContactPageData.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ArticalData from "./data/testingArticalData.json";
import ArticalPost from "./ArticalPost.jsx";

import AppRouter from "./router/AppRouter.jsx";

function App() {
  return (
      <AppRouter />
  );
}

export default App;