import React from 'react';
import { BrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './pages/Home'; // Assure-toi que le chemin correspond à ton fichier
import SnakeGame from './pages/SnakeGame'; // Assure-toi que le chemin correspond à ton fichier
import NotFound from './pages/NotFound'; // Assure-toi que le chemin correspond à ton fichier

const router = BrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/snake', element: <SnakeGame /> },
    { path: '/404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/404" replace /> }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
