// this file is the center of the application, the root component that houses all other components

// added this without instruction to match 20.1.5
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

// this function returns html represented by JSX, Javascript XML
// think of this like document.createElement(JSX)

// instead of hardcoding all nav categories, we'll define the categories in an array
// of objects that contain each category's name and a short description. 
// use the useState hook here so we can have the option to change the categories at some point in the future

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects"
    },
    {
      name: "portraits",
      description: "Portraits of people in my life"
    },
    {
      name: "food",
      description: "Delicious delicacies"
    },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
        </div>
      </main>
    </div>
  );
}
export default App;