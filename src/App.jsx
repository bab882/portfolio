import React from 'react';
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import SnakeGame from './pages/SnakeGame';
import NotFound from './pages/NotFound';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<div className='App'><Home /></div> } />
    //     <Route path="/snake" element={<SnakeGame />} />
    //     <Route path="/404" element={<NotFound />} />
    //     <Route path="*" element={<Navigate to="/404" replace />} />
    //   </Routes>
    // </Router>
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<SnakeGame />} />

        <Route path="/404" element={ <NotFound /> } />
        <Route path="*" element={ <Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
