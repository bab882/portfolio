import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import SnakeGame from './components/SnakeGame';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route principale avec tous les composants */}
        <Route
          path="/"
          element={
            <div className='App'>
              <Banner />
              <NavBar />
              <Project />
              <Portfolio />
              <Footer />
            </div>
          }
        />
        {/* Routes pour les projets sans rappeler les autres composants */}
        <Route path="/project/snake" element={<SnakeGame />} />
      </Routes>
    </Router>
  );
}

export default App;
