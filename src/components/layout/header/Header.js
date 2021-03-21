import React, { useEffect, useState } from "react";

import {Link} from "react-router-dom";

import {IconHeaderPattern, IconSun, IconMoon} from "../../svg/SvgIcon";

import "./Header.scss";

const Header = () => {

    const [active, setActive] = useState(false);

    const getTheme = () => {
        let theme = "light";

        if (localStorage.getItem("theme")) {
            theme = localStorage.getItem("theme");
        }

        return theme;
    }

    const [theTheme, setTheme] = useState(getTheme());

    useEffect( () => {

        document.documentElement.className = theTheme + "-theme";

        localStorage.setItem("theme", theTheme);

        if (theTheme === "light") {
            setActive(false);
        } else {
            setActive(true);
        }

    }, [theTheme]);

    const toggleTheme = () => {
        if (theTheme === "light") {
            setTheme("dark");
            setActive(true);
        } else {
            setTheme("light");
            setActive(false);
        }
    }

    const iconStyles = {
        width: "1.1rem",
        fill: "#ffffff"
    }

    return (
        <header className="main-header position-relative">
            
            {/* start img  */}
            <IconHeaderPattern style={{width: "100%"}} />
            {/* ****** end img  */}

            {/* start header-content  */}
            <div className="container header-content">
                <div className="row">

                    {/* logo  */}
                    <div className="col-6">
                        <div className="logo">
                            <h2 className="text text-capitalize"><Link to="/">devjobs</Link></h2>
                        </div>
                    </div>

                    {/* toggle-mode  */}
                    <div className="col-6">
                        <div className="toggle-theme">
                            <div className="toggle-theme-content d-flex justify-content-end align-items-center">
                                <span className="theme-icon">
                                    <IconSun style={iconStyles} />
                                </span>
                                <span className="theme-handler">
                                    <input id="theme-handler" type="checkbox" checked={active} onChange={toggleTheme} />
                                    <label htmlFor="theme-handler"></label>
                                </span>
                                <span className="theme-icon">
                                    <IconMoon style={iconStyles} />
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* ******* end header-content  */}
            
        </header>
    )

}

export default Header;