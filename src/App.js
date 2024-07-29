// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./components/pages/HomePage";
import JakesPage from "./components/pages/JakesPage";
import "./App.css";

function App() {
  const headerLinks = [
    { path: "/", label: "Home" },
    { path: "/jake", label: "Jake's Page" },
  ];

  const footerLinks = [
    { url: "https://example.com/privacy", label: "Privacy Policy" },
    { url: "https://example.com/terms", label: "Terms of Service" },
  ];

  return (
    <Router>
      <div className="App">
        <Header title="League Analytics" links={headerLinks} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jake" element={<JakesPage />} />
          </Routes>
        </main>
        <Footer
          copyrightYear={new Date().getFullYear()}
          companyName="League Analytics Inc."
          links={footerLinks}
        />
      </div>
    </Router>
  );
}

export default App;
