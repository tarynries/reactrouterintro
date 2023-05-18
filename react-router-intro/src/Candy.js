import React from "react";
import { Link } from 'react-router-dom';

function Candy() {
    return (
        <div>
            <h1>SUGAR</h1>
            <img
                src="https://media.giphy.com/media/68VbOiJLDUkYo/giphy.gif"
                alt="Big piles of candy."
            />
            <br></br>
            <Link to="/vendingmachine">Go back to Vending Machine</Link>
        </div>
    );
}

export default Candy;