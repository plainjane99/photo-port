import React from 'react';

// this modal will be activated by clicking a photo through PhotoList
// destructure props into onClose and currentPhoto for use as a parameter
const Modal = ({ onClose, currentPhoto }) => {

    // destructure currentPhoto properties into constants to assign their values into the modal
    const {name, category, description, index} = currentPhoto;

    return (
        // create a basic modal with a backdrop and container
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img 
                    src={require(`../../assets/large/${category}/${index}.jpg`).default}
                    alt="current category"
                />
                <p>{description}</p>
                {/* assign onClose to event listener */}
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;