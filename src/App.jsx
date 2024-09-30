import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import SnakeGame from './components/SnakeGame';
import { HashRouter } from 'react-router-dom'; // Importer HashRouter pour les projets

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
        {/* Utilisation de HashRouter pour les projets */}
        <Route
          path="project/*"
          element={
            <HashRouter>
              <Routes>
                {/* Routes pour les projets spécifiques */}
                <Route path="snake" element={<SnakeGame />} />
                {/* Ajoute d'autres projets si nécessaire */}
              </Routes>
            </HashRouter>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
