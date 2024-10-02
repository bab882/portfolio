import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SnakeGame from './pages/SnakeGame';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className='App'><Home /></div> } />
        <Route path="/snake" element={<SnakeGame />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/500" element={<ServerError />} />
      </Routes>
    </Router>
  );
}

export default App;
