import React from "react";
import { Link } from 'react-router-dom';

function VendingMachine() {
    return (
        <div>
            <h1>Vending Machine</h1>
            <h2>Choose what you would like to eat</h2>
            <img
                src="https://media.giphy.com/media/CprnDw0e7u1IHOioYp/giphy.gif"
                alt="Vending Machine."
            />
            <ul style={{ listStyleType: 'none' }}>
                <li>
                    <Link to="/cookies">Cookies</Link>
                </li>
                <li>
                    <Link to="/chips">Chips</Link>
                </li>
                <li>
                    <Link to="/candy">Candy</Link>
                </li>
            </ul>
        </div>
    );
}

export default VendingMachine;
