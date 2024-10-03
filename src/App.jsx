import React from 'react';
//import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import SnakeGame from './pages/SnakeGame';
import NotFound from './pages/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/snake",
    element: <SnakeGame />,
  }
]);

function App() {
  return ( <RouterProvider router={router} />);
    

   //(
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<div className='App'><Home /></div> } />
    //     <Route path="/snake" element={<SnakeGame />} />
    //     <Route path="/404" element={<NotFound />} />
    //     <Route path="*" element={<Navigate to="/404" replace />} />
    //   </Routes>
    // </Router>
 // );
}

export default App;
