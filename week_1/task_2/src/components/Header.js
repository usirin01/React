import React from "react";

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand">LOGO</a>
                <div id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="...">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="...">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="...">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
};

export default Header;