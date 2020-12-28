// For the sake of modularity, break out the logic for the images themselves into a PhotoList component
// This will be a child component of the Gallery component that will now handle the photo rendering logic

import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {

    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Building exterior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cat green eyes',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green parrot',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Yellow macaw',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pug smile',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pancakes',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burrito',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Scallop pasta',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green river',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    // go through each photo in the photos array, 
    // trying to find every photo that matches the category that was selected by the user
    // If a photo matches the condition, it is returned in an array and assigned to currentPhotos
    // Then map the currentPhotos array to render each photo that matches the category selected by the user
    const currentPhotos = photos.filter((photo) => photo.category === category);

    // we only want the modal to open when a user has clicked an image
    // so conditionally render the modal based on whether an image has been clicked
    // this hook manages whether the modal is open or not, with an initial state of false
    const [isModalOpen, setIsModalOpen] = useState(false);

    // use the useState Hook in the PhotoList component to manage the current photo state and
    // make this data accessible to the Modal component through props
    const [currentPhoto, setCurrentPhoto] = useState();

    // define our function to open the modal when a user has clicked on an image
    const toggleModal = (image, i) => {
        // current photo
        // use the spread operator to add the index: i key value pair to the current photo state
        setCurrentPhoto({...image, index: i});
        // updates the isModalOpen value to true to render the modal
        setIsModalOpen(true);
    }

    return (
        <div>
            {/* modal activated here */}
            {/* pass in currentPhoto as a prop to the modal  */}
            {/* only render the modal if the isModalOpen value is true */}
            {isModalOpen && <Modal currentPhoto={currentPhoto} />}

            <div className="flex-row">
                {/* image object represents the element in the photos array
                'i' is the index in the path file structure where we pull/section the image */}
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        // event handler function to capture the individual photo data for the modal
                        // passed in the current image and i as arguments to our toggleModal function
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default PhotoList;