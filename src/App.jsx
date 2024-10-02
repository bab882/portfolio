import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import SnakeGame from './pages/SnakeGame';
import Error404 from './components/Error404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/snake',
    element: <SnakeGame />,
  },
  
]);
function App() {
  return (
    <RouterProvider router={router} />
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<div className='App'><Home /></div> } /> */}
    //     <Route path="/snake" element={<SnakeGame />} />
    //     <Route path="/*" element={<Error404 />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
