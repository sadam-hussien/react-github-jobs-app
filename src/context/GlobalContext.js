import React, {createContext, useEffect, useReducer} from "react";

import GlobalReducer from "./GlobalReducer";

import axios from "axios";

const initialState = {
    jobs: null,
    thePage: 1
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    // update the data
    const CORS_ANYWHERE = 'https://ritter-cors-anywhere.herokuapp.com/';

    useEffect( () => {

        axios.get(CORS_ANYWHERE + `https://jobs.github.com/positions.json?page=1`, {params: {markdown: true}}).then(response => {

            dispatch({
                type: "UPDATE_THE_CONTEXT",
                payload: response.data
            })

        })

    }, [])

    // show more
    const showMore = (items, page) => {
        dispatch({
            type: "SHOW_MORE",
            payload: {items: items, page: page}
        })
    }

    // filter jobs
    const filterJobs = (search, location, fullTime) => {

        if (search || location || fullTime) {

            dispatch({
                type: "FILTER_JOBS",
                payload: {search, location, fullTime}
            })

        } else {
            
        }

    }

    return (
        <GlobalContext.Provider value={{jobs: state.jobs, thePage: state.thePage, showMore, filterJobs}}>
            {children}
        </GlobalContext.Provider>
    )

}