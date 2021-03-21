import React from "react";

import {Link} from "react-router-dom";

import DefaultCompanyLogo from "../../../../assets/default-company-logo.png";

import "./jobItem.scss";

const JobItem = ({theClass, id, logo, time, title, location, company, url, type, companyUrl, description, howApply}) => {

    return (
        <div className={theClass}>
            <Link to={`/details/${id}`}>
                <div className="job-item h-100">
                    {/* start img  */}
                    <div className="img">
                        {logo ? 
                            <img src={logo} alt={title} className="img-fluid" />
                        : 
                            <img src={DefaultCompanyLogo} alt={title} className="img-fluid" />
                        }
                    </div>

                    {/* start created-at */}
                    <div className="created-at">
                        <h6 className="text m-0">{time + " - "}<span>{type}</span></h6>
                    </div>

                    {/* start title  */}
                    <div className="title">
                        <h5 className="text m-0">{title}</h5>
                    </div>

                    {/* start name  */}
                    <div className="name">
                        <h6 className="text m-0">{company}</h6>
                    </div>

                    {/* start location  */}
                    <div className="location">
                        <h6 className="text m-0">{location}</h6>
                    </div>

                </div>
            </Link>
        </div>
    )

}

export default JobItem;