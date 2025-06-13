import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import HomePage from "./HomePage.jsx";

import ContactPage from "./ContactPage.jsx";
import contactData from "./data/testingContactPageData.json";

import ArticalData from "./data/testingArticalData.json";
import ArticalPost from "./ArticalPost.jsx";

import articals from "./data/articals.json";



export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" 
                element={
                    <>
                    <Navbar />
                    <HomePage />
                    <Footer />
                    </>
            } />

            <Route  path="/contact"
                element={
                    <>
                    <Navbar />
                    <ContactPage contactPageInfo={contactData}/>
                    <Footer />
                    </>
            } />

            <Route path="/culture"
                element={
                    <>
                    <Navbar />
                    <Footer />
                    </>
            } />

            <Route path="/economy"
                element={
                    <>
                    <Navbar />
                    <Footer />
                    </>
            } />

            <Route path="/politics"
                element={
                    <>
                    <Navbar />
                    <Footer />
                    </>
            } />

            <Route path="/science"
                element={
                    <>
                    <Navbar />
                    <Footer />
                    </>
            } />

            <Route path="/technology"
                element={
                    <>
                    <Navbar />
                    <Footer />
                    </>
            } />

            <Route path="/travel"
                element={
                    <>
                    <Navbar />
                    <Footer />
                    </>
            } />

            <Route path="/gaming"
                element={
                    <>
                    <Navbar />
                    <Footer />
                    </>
            } />

            <Route path="/artical/:id"
                element={
                    <>
                    <Navbar />
                    <ArticalPost  />
                    <Footer />
                    </>
            } />


      </Routes>
    )
}