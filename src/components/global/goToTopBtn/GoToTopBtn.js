import React, { useState } from "react";

import {IconChevron} from "../../svg/SvgIcon";

import "./GoToTopBtn.scss";

const GoToTopBtn = () => {

    const [active, setActive] = useState(false);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 200) {

            setActive(true);

        } else {

            setActive(false);

        }

    });

    const handleScroll = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    return (
        <button type="button" className={`go-to-top-btn ${active ? "active" : ""}`} onClick={handleScroll}>
            <IconChevron style={{width: "1.5rem", fill: "#ffffff"}} />
        </button>
    )

}

export default GoToTopBtn;