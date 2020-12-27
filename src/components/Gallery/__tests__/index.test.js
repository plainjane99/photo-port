// import dependencies
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

// The Gallery component will also require a prop of currentCategory
// Rather than taking it from the App component,
// mock it out at the top of our file
// with unit tests, we want to isolate the part that we're testing as much as possible
const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery is rendering', () => {
    // render the component into the DOM and return a utility function
    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });
})

// use .toMatchSnapshot() to make sure the gallery matches its snapshot
// Even though the real gallery doesn't hold the images itself, 
// our snapshot still knows about its contents (PhotoList). 
it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
})

// make sure that the title of our <h1> is Portraits
it('renders', () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
})