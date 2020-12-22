import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

// React components must always return a single parent JSX element.
// However, this element may have many children elements
// For example, we cannot have another element outside and at the same level as <section>
function About() {
    return(
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;