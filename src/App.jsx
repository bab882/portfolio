import React from 'react';
import { BrowserRouter , Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/Home";
import SnakeGame from './pages/SnakeGame';
import NotFound from './pages/NotFound';


const Root = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/snake" element={<SnakeGame />} />
    <Route path="*" element={<NotFound />} />
    {/* <Route path="/*" element={<Navigate to="/404" replace />} /> */}
  </Routes>
);

function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;
