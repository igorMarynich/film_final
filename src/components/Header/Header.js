import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <button>
                <Link to="/">Login</Link>
            </button>
            <button>
                <Link to="/about">Registration</Link>
            </button>
            <button>
                <Link to="/films">Films</Link>
            </button>
            <button>
                <Link to="/rent">Rent</Link>
            </button>
        </div>
    );
}

export default Header;
