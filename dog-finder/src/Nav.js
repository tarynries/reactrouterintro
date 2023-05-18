import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {
    return (
        <nav>
            <ul>
                {dogs.map((dog) => (
                    <li key={dog.name}>
                        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;