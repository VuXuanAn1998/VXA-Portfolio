import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./page/client/home/Home"
import About from "./page/client/about/About"
import Portfolio from "./page/client/portfolio/Portfolio"
import Contact from "./page/client/contact/Contact"
import Header from './component/Header';
import Setting from './component/Setting';
const MyComponent: React.FC = () => {
  return (
    <BrowserRouter>
     <Header/>
     <Setting/>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </div>
    </BrowserRouter>  
  );
};

export default MyComponent;
