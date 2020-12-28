import React from 'react';

function ContactForm() {
    // create the DOM elements in the contact form
    // create a form with three inputs (name, email, and message)
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                {/* name input */}
                {/* Due to keywords reserved in JavaScript, 
                'for' attribute in the <label> element needs to be 'htmlFor' */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>

                {/* email input */}
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>

                {/* message text area */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" />
                </div>

                {/* add the button*/}
                <button type="submit">Submit</button>   
                             
            </form>
        </section>
    )
}

export default ContactForm;