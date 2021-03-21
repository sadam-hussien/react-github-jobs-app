import React, { useContext } from "react";

import JobItem from "./jobItem/JobItem";

import "./Jobs.scss";

import {GlobalContext} from "../../../context/GlobalContext";

import axios from "axios";  

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

const Jobs = ()  => {

    const {jobs, thePage, showMore} = useContext(GlobalContext);

    const skeletonStyles = {
        color: "#dadada",
        highlightColor: "#cecece" 
    }

    // load more
    const CORS_ANYWHERE = 'https://ritter-cors-anywhere.herokuapp.com/';

    const loadMore = () => {

        let mypage = thePage + 1;

        axios.get(CORS_ANYWHERE + `https://jobs.github.com/positions.json?page=${mypage}`, {params: {markdown: true}}).then(response => {

            showMore(response.data, mypage);

        });

        console.log("cool");

    }

    return (
        <section className="jobs">
            <div className="container">
                <div className="row">
                    {
                        jobs ? 
                            jobs.map(item => {
                                
                                return <JobItem 
                                    key={item.id} 
                                    id={item.id}
                                    theClass="col-md-6 col-lg-4 for-margin" 
                                    logo={item.company_logo} 
                                    time={item.created_at} 
                                    title={item.title}
                                    location={item.location}
                                    company={item.company}
                                    url={item.url}
                                    type={item.type}
                                    companyUrl={item.company_url}
                                    description={item.description}
                                    howApply={item.how_to_apply} />

                            }) 
                        : 
                            <React.Fragment>
                                    <div className="col-md-6 col-lg-4 for-margin">
                                        <SkeletonTheme color={skeletonStyles.color} highlightColor={skeletonStyles.highlightColor}>
                                            <Skeleton height={212.5} />
                                        </SkeletonTheme>
                                    </div>
                                    <div className="col-md-6 col-lg-4 for-margin">
                                        <SkeletonTheme color={skeletonStyles.color} highlightColor={skeletonStyles.highlightColor}>
                                            <Skeleton height={212.5} />
                                        </SkeletonTheme>
                                    </div>
                                    <div className="col-md-6 col-lg-4 for-margin">
                                        <SkeletonTheme color={skeletonStyles.color} highlightColor={skeletonStyles.highlightColor}>
                                            <Skeleton height={212.5} />
                                        </SkeletonTheme>
                                    </div>
                                    <div className="col-md-6 col-lg-4 for-margin">
                                        <SkeletonTheme color={skeletonStyles.color} highlightColor={skeletonStyles.highlightColor}>
                                            <Skeleton height={212.5} />
                                        </SkeletonTheme>
                                    </div>
                                    <div className="col-md-6 col-lg-4 for-margin">
                                        <SkeletonTheme color={skeletonStyles.color} highlightColor={skeletonStyles.highlightColor}>
                                            <Skeleton height={212.5} />
                                        </SkeletonTheme>
                                    </div>
                                    <div className="col-md-6 col-lg-4 for-margin">
                                        <SkeletonTheme color={skeletonStyles.color} highlightColor={skeletonStyles.highlightColor}>
                                            <Skeleton height={212.5} />
                                        </SkeletonTheme>
                                    </div>
                            </React.Fragment>
                    }
                </div>
                <div className="show-more-btn d-flex justify-content-center">
                    <button type="button" className="text-capitalize" onClick={loadMore}>show more</button>
                </div>
            </div>
        </section>
    )

}

export default Jobs;