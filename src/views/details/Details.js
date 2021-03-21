import React, {useContext, useEffect, useState} from "react";

import {useParams} from "react-router-dom";

import {GlobalContext} from "../../context/GlobalContext";

import DefaultCompanyLogo from "../../assets/default-company-logo.png";

import {IconFooterPattern} from "../../components/svg/SvgIcon";

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

import "./Details.scss";

const Details = () => {

    const {id} = useParams();

    const [details, setDetails] = useState([]);

    const {jobs} = useContext(GlobalContext);
    
    const skeletonStyles = {
        color: "#dadada",
        highlightColor: "#cecece" 
    }

    useEffect( () => {

        if (jobs) {

            const filterJobs = jobs.filter(item => item.id === id);
            
            setDetails(filterJobs);
        }

    }, [id, jobs]);

    const items = details.length > 0 ? details.map(item => {
        return (
            <div key={item.id}>
                <div className="details-item">

                    {/* start header  */}
                    <div className="details-header d-flex flex-column flex-md-row align-items-center">
                        {/* img  */}
                        {item.company_logo ? 
                            <img src={item.company_logo} alt={item.title} className="img-fluid d-none d-lg-block" />
                        :
                            <img src={DefaultCompanyLogo} alt={item.title} className="img-fluid d-none d-lg-block" />
                        }

                        {/* title  */}
                        <div className="company-name">
                            <h4 className="company-name-text text-capitalize">{item.company}</h4>
                            <a href={item.company_url}>{item.company_url ? item.company_url : "company url not valid"}</a>
                        </div>

                        {/* site  */}
                        <div className="company-site">
                            <a href={item.company_url}>company site</a>
                        </div>

                    </div>

                    {/* start body  */}
                    <div className="details-body">

                        {/* start top-details */}
                        <div className="top-details d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                            <div>
                                <span className="created">{item.created_at + " - "} <span className="font-weight-bold">{item.type}</span> </span>
                                <h3 className="job-title">{item.title}</h3>
                                <span className="location font-weight-bold">{item.location}</span>
                            </div>
                            <div className="apply d-flex">
                                <a href={item.company_url}>apply now</a>
                            </div>
                        </div>

                        <div className="description-area">
                            <pre>{item.description}</pre>
                        </div>

                    </div>

                    {/* start footer  */}
                    <div className="details-footer w-100">
                        <IconFooterPattern style={{width: "100%"}}/>
                        <div className="details-footer-content">
                            <h5 className="how-to-title text-capitalize">how to apply</h5>
                            <pre>{item.how_to_apply}</pre>
                        </div>
                    </div>

                </div>
            </div>
        )
    }) 
    :
        <React.Fragment>
            <div className="details-item skeleton">
                {/* start header  */}
                <div className="details-header skeleton">
                    <SkeletonTheme color={skeletonStyles.color} highlightColor={skeletonStyles.highlightColor}>
                        <Skeleton height={150} />
                    </SkeletonTheme>
                </div>

                {/* start body  */}
                <div className="details-body skeleton">
                    <SkeletonTheme color={skeletonStyles.color} highlightColor={skeletonStyles.highlightColor}>
                        <Skeleton height={300} />
                    </SkeletonTheme>
                </div>
            </div>            
        </React.Fragment>

    return (
        <section className="page details-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {items}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Details;