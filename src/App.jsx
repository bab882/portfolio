import React from 'react';
import Banner from './components/Banner';
import NavBar from './components/Navigation';
import Project from './components/Project';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';



function App() {
  return (
    <div className='App'>
      <Banner />
      <NavBar />
      <Project />
      <Portfolio />
      <Footer /> 
    </div>
  );
}

export default App;