import React from 'react';
import { BrowserRouter , Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/Home";
import SnakeGame from './pages/SnakeGame';
import NotFound from './components/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snake" element={<SnakeGame />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
 );
}

export default App;
