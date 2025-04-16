import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';


function App() {
  return (
  <BrowserRouter>
  {/* <div>Navbar</div> */}
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
  
  </BrowserRouter>
  );
};

export default App;