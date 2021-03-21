import React from "react";

// SearchBox 
import SearchBox from "../../components/home/searchBox/SearchBox";

// jobs
import Jobs from "../../components/home/jobs/Jobs";

import {IconShape} from "../../components/svg/SvgIcon";

import "./Home.scss";

const Home = () => {

    return (
        <section className="page home-page">
            
            {/* start search box  */}
            <SearchBox />

            {/* jobs  */}
            <Jobs />

            <div className="the-shape">
                <IconShape style={{fill: "#939BF4", minWidth: "600px", maxWidth: "800px"}} />
            </div>

        </section>
    )

}

export default Home;