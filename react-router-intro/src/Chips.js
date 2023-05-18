import React from "react";
import { Link } from 'react-router-dom';

function Chips() {
    return (
        <div>
            <h1>CRUNCHY</h1>
            <img
                src="https://media.giphy.com/media/129fSchexp3aPC/giphy.gif"
                alt="Cartoon man eating lots of chips."
            />
            <br></br>
            <Link to="/vendingmachine">Go back to Vending Machine</Link>
        </div>
    );
}

export default Chips;