import React from "react";
import { NavLink } from "react-router-dom";



const Nav = (props) => {
    const {locationUrl} = props;
    const pageUrls = [
        {
            url: "jokes/random",
            label: "Random Joke"  
        },
        {
            url: "jokes/types",
            label: "getRandomJoke"
        },
        {
            url: "jokes/{type}",
            label: "Get Random Joke Type"
        
    }
]
return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {pageUrls.map((linkInfo, index) => {
                        return (
                            <li key={index} className="nav-item">
                                <NavLink 
                                    to={linkInfo.url} 
                                    className={isActive =>
                                        "nav-link" + (isActive ? " active" : "")
                                    }
                                >
                                    {linkInfo.label}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </nav>
)
}

export default Nav
