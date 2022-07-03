import React from 'react';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

import './App.scss';
import './styles/global.scss';

function App() {
  return (
    <div className="App scroll-pages">
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
