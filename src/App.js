import React from 'react'
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Header from "./components/Header"
import Personal from "./components/Personal";
import Project from "./components/Project";
import Services from "./components/Services";
function App() {
  return (
    <div className="main-page">
      <Header />
      <Banner />
      <Personal />
      <Project/>
      <Services />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
