import React from "react";
import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => {
    return (
        <div>
            <h2>Meet Our Dogs</h2>
            <ul>
                {dogs.map((dog) => (
                    <li key={dog.name}>
                        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DogList;