// import the packages we'll need to test the Nav component
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

// configure the test environment
afterEach(cleanup);

describe('Contact component is rendering', () => {
    // baseline test
    it('renders', () => {
        render(<Contact/>);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact/>);
        expect(asFragment()).toMatchSnapshot();
    });
    
    // make sure that the title of our <h1> is Contact Me
    it('renders', () => {
        const { getByTestId } = render(<Contact/>)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })

    // make sure that the title of our <button> is Submit
    it('renders', () => {
        const { getByTestId } = render(<Contact/>)
        expect(getByTestId('buttontag')).toHaveTextContent('Submit')
    })
    
});