import React from 'react';
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
  },
  {
    path: "*",  // Route wildcard pour gérer toutes les autres routes non définies
    element: <NotFound />,
  }
]);

function App() {
  return ( <RouterProvider router={router} />);
}

export default App;
