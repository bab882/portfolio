import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SnakeGame from './pages/SnakeGame';
import NotFound from './pages/Error404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className='App'><Home /></div> } />
        <Route path="/snake" element={<SnakeGame />} />
        
      </Routes><Route path="*" element={<Error404 />} />
    </Router>
  );
}

export default App;
