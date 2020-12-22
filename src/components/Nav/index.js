import React from 'react';

// React components must always return a single parent JSX element.
// However, this element may have many children elements
// For example, we cannot have another element outside and at the same level as <section>
function Nav() {
    // instead of hardcoding all nav categories, we'll define the categories in an array
    // of objects that contain each category's name and a short description. 
    const categories = [
        {
            name: "commercial",
            description:
                "Photos of grocery stores, food trucks, and other commercial projects"
        },
        {
            name: "portraits",
            description: "Portraits of people in my life"
        },
        {
            name: "food",
            description: "Delicious delicacies"
        },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];

    // event listener function
    function categorySelected(name) {
        console.log(`${name} clicked`);
    }

    // map() over the 'categories' array
    // in JSX, we need to give each element in the array a unique key attribute
    // in our case, we used category to state key=category.name
    // the parantheses returns back a single JSX element 
    // we also add an event listener since we'll want to use the links we put into the nav
    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>

                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;