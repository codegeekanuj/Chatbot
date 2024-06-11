import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/ui/footer';

function App() {
  return (
  
    <Router>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router> 
    
  );
}

export default App;