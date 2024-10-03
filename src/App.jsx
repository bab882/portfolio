import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'; // Assure-toi que le chemin correspond à ton fichier
import SnakeGame from './pages/SnakeGame'; // Assure-toi que le chemin correspond à ton fichier
import NotFound from './pages/NotFound'; // Assure-toi que le chemin correspond à ton fichier

const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/snake', element: <SnakeGame /> },
    { path: '/*', element: <NotFound /> },
    { path: '*', element: <Navigate to="/404" replace /> }
]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
