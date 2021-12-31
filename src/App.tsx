import React from 'react';
import './App.css';
import HeaderComponent from './components/header/header';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CatSection from './pages/cat_section/cat';
import Home from './pages/home/home';
function App() {
  return (
   
      <Router>
    <div className="App">
       <HeaderComponent />
        <Routes>
        <Route path = '/' element= {<Home />} />
          <Route path='/cats' element={<CatSection />} />
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
