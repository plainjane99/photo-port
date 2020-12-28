import React, { useState } from 'react';

// validate email format
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    // the Hook that'll manage the form data
    // A feature of this Hook is the ability to initialize the values of the state
    // we want to clear the input fields on the component loading so set the initial state to empty strings
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // destructure the formState object into its named properties, name, email, and message
    // each property is added to the defaultValue attribute to each of the three form elements that'll handle form data. 
    const { name, email, message } = formState;

    // define the error message that may occur for input validation
    const [errorMessage, setErrorMessage] = useState('');

    // sync the state
    // function that will sync the state of the component formState with the user input
    // onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name
    function handleChange(e) {

        // validate email before syncing the form data with the state, formState
        // target the email <input> element, i.e. if the input is 'email' then validate it
        if (e.target.name === 'email') {
            // validate the value of the email input field by using the validateEmail function
            // which returns a Boolean: true if valid and false if invalid
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                // empty string means no errror
                setErrorMessage('');
            }
        }
        // handle the message and name form elements.  fields cannot be blank.
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        // setFormState function updates the formState value for the name property
        // assign the value taken from the input field in the UI with e.target.value
        // and assign this value to the property formState.name
        // use the spread operator, ...formState, so we can retain the other key-value pairs in this object
        // The name property of target refers to the name attribute of the form element
        // This attribute value matches the property names of formState (name, email, and message)
        // and allows us to use [ ] to create dynamic property names
        setFormState({ ...formState, [e.target.name]: e.target.value })

        // use this to log the error message
        // console.log('errorMessage', errorMessage);

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    // console.log goes outside of the handleChange function
    // because the asynchronous nature of the setFormState function will cause the console.log placed in the function body of handleChange to appear delayed in its ability to sync
    // console.log(formState);

    // prevent the default action of the form Submit button
    // and then log the formState object on the Submit button click since we do not have a backend
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // create the DOM elements in the contact form
    // create a form with three inputs (name, email, and message)
    // forms have an internal state so leverage the useState Hook to maintain the form data with state
    // When form data is maintained by the state of the component, 
    // we call it a controlled component
    // a controlled component allows the data to be validated or manipulated using JavaScript, offering better control over the data
    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            {/* add event handler onSubmit at form level to call handleSubmit function */}
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name input */}
                {/* Due to keywords reserved in JavaScript, 
                'for' attribute in the <label> element needs to be 'htmlFor' */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>

                {/* email input */}
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>

                {/* message text area */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>

                {/* render this if there is an error */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                {/* add the button*/}
                <button data-testid="buttontag" type="submit">Submit</button>

            </form>
        </section>
    )
}

export default ContactForm;