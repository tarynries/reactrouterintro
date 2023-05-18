import React from "react";
import { Link } from 'react-router-dom';

function Cookies() {
    return (
        <div>
            <h1>I LOVE COOKIES</h1>
            <img
                src="https://media.giphy.com/media/xT0xeMA62E1XIlup68/giphy.gif"
                alt="Cookie monster eating cookies"
            />
            <br></br>
            <Link to="/vendingmachine">Go back to Vending Machine</Link>
        </div>
    );
}

export default Cookies;