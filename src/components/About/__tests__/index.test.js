// React components are just functions that can be passed into or returned from other functions.
// This means we can test a component by comparing its expected and actual outputs with a given input

// we'll use React Testing Library, a lightweight solution for testing React components. 
// It provides utility functions on top of react-dom and react-dom/test-utils that encourage best practices in testing

// We'll also use Jest to provide the testing framework, and jest-dom for some custom matchers

// we need react to enable the components to function properly so we can test them
import React from 'react';

// retrieve some functions from the React Testing Library
// render function renders the component
// jest will create a simulated DOM in a node.js environment to approximate the DOM
// cleanup function is used to remove components from the DOM to prevent memory leaking, 
// as well as variable or data collisions between tests that could corrupt test results
import { render, cleanup } from '@testing-library/react';

// import the extend-expect library from the jest-dom package
// jest-dom offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';

// import the component we will be testing
import About from '..';

// configure the test environment
// call the cleanup function using the afterEach global function from Jest
// to ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

// use the describe function to declare the component we're testing
// renders About test
describe('About component', () => {
    // first test - the baseline test
    // the first argument, a string declares what is being tested
    // In the second argument, a callback function runs the test
    it('renders', () => {
        // use the render function to render the About component using JSX
        render(<About />);
    });

    // second test - the test case
    // compare snapshot versions of the DOM node structure. 
    // A snapshot is a serialized version of the DOM node structure, enabled by Jest
    it('matches snapshot DOM node structure', () => {
        // render About
        // asFragment function, which returns a snapshot of the About component
        const { asFragment } = render(<About />);

        // then we'll test and compare whether the expected and actual outcomes match
        // Use the expect function with a matcher to assert something about a value
        // use the toMatchSnapshot matcher to assert that snapshots will match
        expect(asFragment()).toMatchSnapshot();
    });

})