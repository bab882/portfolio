import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import SnakeGame from './pages/SnakeGame';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className='App'>
              <Home />
            </div>
          }
        /> 
        <Route 
          path="/snake" 
          element={
            <SnakeGame />
        } />
      </Routes>
    </Router>
  );
}

export default App;
