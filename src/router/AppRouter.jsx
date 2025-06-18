import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import HomePage from "../components/HomePage.jsx";
import ContactPage from "../components/ContactPage.jsx";
import About from "../components/About.jsx";
import ArticalPost from "../components/ArticalPost.jsx";
import contactData from "../data/testingContactPageData.json";  


import PrivacyPolicy from "../components/information/PrivacyPolicy.jsx";
import TermsConditions from "../components/information/TermsConditions";
import Location from "../components/information/Location";
import FAQ from "../components/information/FAQ";
import Advertise from "../components/Advertise.jsx";
import Subscription from "../components/Subscription.jsx";
import ContributionForm from "../components/Contribute.jsx";




export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
      <Route path="/contact" element={<><Navbar /><ContactPage contactPageInfo={contactData} /><Footer /></>} />
      <Route path="/culture" element={<><Navbar /><HomePage articalTypes="CULTURE" /><Footer /></>} />
      <Route path="/economy" element={<><Navbar /><HomePage articalTypes="ECONOMY" /><Footer /></>} />
      <Route path="/politics" element={<><Navbar /><HomePage articalTypes="POLITICS" /><Footer /></>} />
      <Route path="/science" element={<><Navbar /><HomePage articalTypes="SCIENCE" /><Footer /></>} />
      <Route path="/technology" element={<><Navbar /><HomePage articalTypes="TECHNOLOGY" /><Footer /></>} />
      <Route path="/travel" element={<><Navbar /><HomePage articalTypes="TRAVEL" /><Footer /></>} />
      <Route path="/gaming" element={<><Navbar /><HomePage articalTypes="GAMING" /><Footer /></>} />
      <Route path="/artical/:id" element={<><Navbar /><ArticalPost /><Footer /></>} />



      <Route path="/privacy" element={<><Navbar /><PrivacyPolicy /><Footer /></>} />
      <Route path="/terms" element={<><Navbar /><TermsConditions /><Footer /></>} />
      <Route path="/location" element={<><Navbar /><Location /><Footer /></>} />
      <Route path="/faq" element={<><Navbar /><FAQ /><Footer /></>} />
      <Route path="/advertise" element={<><Navbar /><Advertise /><Footer /></>} />
      <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
      <Route path="/subscription" element={<><Navbar /><Subscription /><Footer /></>} />
      <Route path="/contribute" element={<><Navbar /><ContributionForm /><Footer /></>} />
      
      
    </Routes>
  );
}
