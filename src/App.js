// this file is the center of the application, the root component that houses all other components

// added this without instruction to match 20.1.5
import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

// this function returns html represented by JSX, Javascript XML
// think of this like document.createElement(JSX)
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;