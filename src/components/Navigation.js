import React from 'react';
import { Link } from "react-router-dom";

const NavigationComponent = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/contacts">contacts</Link> |{" "}
                <Link to="/services">services</Link>
            </nav>
        </div>
    )
}

export default NavigationComponent