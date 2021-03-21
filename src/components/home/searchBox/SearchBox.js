import React, { useContext, useState } from "react";

import {IconLocation, IconSearch} from "../../svg/SvgIcon";

import {GlobalContext} from "../../../context/GlobalContext";

import "./SearchBox.scss";

const SearchBox = () => {

    const [search, setSearch] = useState("");

    const [location, setLocation] = useState("");

    const [fullTime, setFullTime] = useState(false);

    const {filterJobs} = useContext(GlobalContext);

    const handleSearch = (e) => {

        e.preventDefault();

        filterJobs(search, location, fullTime);

    }

    const iconStyles = {
        width: "1.8rem",
        fill: "#5964E0"
    }

    return (
        <section className="search-box">
            <div className="container">
                <form onSubmit={handleSearch}>
                    <div className="row no-gutters">

                        {/* search-box-keyword  */}
                        <div className="col-12 col-lg-4">
                            <div className="search-box-keyword">
                                <div className="box d-flex align-items-center">
                                    <label htmlFor="search-box-keyword">
                                        <IconSearch style={iconStyles} />
                                    </label>
                                    <input 
                                        type="text"
                                        id="search-box-keyword"
                                        placeholder="filter by title, companies or expertise" 
                                        className="form-control"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        
                        {/* search-box-location  */}
                        <div className="col-12 col-lg-4">
                            <div className="search-box-location">
                                <div className="box d-flex align-items-center">
                                    <label htmlFor="search-box-location">
                                        <IconLocation style={iconStyles} />
                                    </label>
                                    <input 
                                        type="text"
                                        id="search-box-location"
                                        placeholder="filter by location" 
                                        className="form-control"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        {/* search-box-type  */}
                        <div className="col-12 col-lg-4">
                            <div className="search-box-type d-flex align-items-center">
                                <div className="box d-flex align-items-center flex-fill">
                                    
                                    <input
                                        type="checkbox"
                                        id="search-box-type"
                                        value="Full Time"
                                        checked={fullTime}
                                        onChange={() => setFullTime(!fullTime)} />
                                    <label htmlFor="search-box-type">
                                            <span>full time only</span>
                                    </label>
                                </div>
                                <button type="submit" className="text-capitalize">search</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    )

}

export default SearchBox;