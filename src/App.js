import React from 'react';
import Home from './pages/Home';
import Preparation from './pages/Preparation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Preparation></Preparation> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preparation" element={<Preparation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
