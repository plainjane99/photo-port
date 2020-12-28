import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'

// create mock function
const mockToggleModal = jest.fn();

// declare a mock current Photo
const currentPhoto = {
    name: 'Cat green eyes',
    category: 'portraits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

// clean up after each test
afterEach(cleanup)

describe('Modal component', () => {
    // baseline test
    it('renders', () => {
        // add mock function and current Photo
        render(<Modal
            currentPhoto={currentPhoto}
            toggleModal={mockToggleModal}
        />);
    })

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Modal
            currentPhoto={currentPhoto}
            toggleModal={mockToggleModal}
        />);

        expect(asFragment()).toMatchSnapshot();
    });

})

// verify click event executes
describe('Click Event', () => {
    it('calls onClose handler', () => {

        // Arrange: Render Modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);

        // Act: Simulate click event
        fireEvent.click(getByText('Close this modal'));

        // Assert: Expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
}) 