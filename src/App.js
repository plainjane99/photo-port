// this file is the center of the application, the root component that houses all other components

// added this without instruction to match 20.1.5
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

// this function returns html represented by JSX, Javascript XML
// think of this like document.createElement(JSX)

// instead of hardcoding all nav categories, we'll define the categories in an array
// of objects that contain each category's name and a short description. 
// use the useState hook here so we can have the option to change the categories at some point in the future

function App() {

  // condition if Contact form renders based on which menu item the user selects from the navigation bar
  // set the initial value of contactSelected to false to prevent the contact form from showing when a user initially navigates to the homepage
  // value of true would render the Contact Form
  const [contactSelected, setContactSelected] = useState(false);

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
        // Pass the getter and setter functions into the Nav component 
        // to allow this component to modify the state in the App component
        // which will conditionally render based on the user's selection
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {/* if conditional to render gallery vs contact form */}
          {/* this conditional uses ternary operator, identified with ? and : */}
          {!contactSelected ? (
            // the <> and </> are react fragments to allow multiple elements to be grouped together
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </>
          ) : (
              <ContactForm></ContactForm>
          )}
        </div>
      </main>
    </div>
  );
}
export default App;