// import the packages we'll need to test the Nav component
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// test suite needs to reflect the inclusion of props
// we create mock functions to use as props for the Nav component to render
// a test should be added for all props used
const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

// configure the test environment
afterEach(cleanup);

// declare the component we're testing
// test if component renders
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav
            // use mock functions as props for the Nav component to render
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            // use mock functions as props for the Nav component to render
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

// test if emoji is visible
// test will check if the emoji has been inserted into the <h2> element in the Nav component
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange the parts of the component that we'll need to access
        // the emoji is located in the <span> element
        const { getByLabelText } = render(<Nav
            // use mock functions as props for the Nav component to render
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            />);
        // Assert
        // test the emoji's accessibility features by querying the element by its aria-label of 'camera'
        // we have used a custom matcher to compare the expected value to the one received by our query
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

// create a test for link visibility
// verify that the text content is being inserted into the <a> tags using the getByTestId method
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange
        const { getByTestId } = render(<Nav
            // use mock functions as props for the Nav component to render
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            />);
        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})