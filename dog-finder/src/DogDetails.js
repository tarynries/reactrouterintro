import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
    const { name } = useParams();

    // Find the current dog based on the name parameter
    const currentDog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

    if (!currentDog) {
        return (
            <div>
                <h2>Dog Not Found</h2>
                <Link to="/dogs">Back to Dog List</Link>
            </div>
        );
    }

    const { age, src, facts } = currentDog;

    return (
        <div>
            <h2>{name}</h2>
            <img src={src} alt={name} />
            <h3>Age: {age}</h3>
            <h3>Facts:</h3>
            <ul>
                {facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
            <Link to="/dogs">Back to Dog List</Link>
        </div>
    );
};

export default DogDetails;