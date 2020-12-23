import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

// React components must always return a single parent JSX element.
// However, this element may have many children elements
// For example, we cannot have another element outside and at the same level as <section>
function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    // the first argument is the callback function, 
    // the second argument is an array with a single element, currentCategory. 
    // The second argument directs the hook to re-render the component on changes to the value of this state
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    // map() over the 'categories' array
    // in JSX, we need to give each element in the array a unique key attribute
    // in our case, we used category to state key=category.name
    // the parantheses returns back a single JSX element 
    // we also add an event listener since we'll want to use the links we put into the nav
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>

                    {categories.map((category) => (
                        // short-circuit expression
                        // currentCategory.name === category.name will get evaluated, 
                        // and as long as it is true, then the second bit of the short circuit, navActive, will be returned
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`}
                            key={category.name}>
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;