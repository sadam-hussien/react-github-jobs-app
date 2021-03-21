const GlobalReducer = (state, action) => {

    switch (action.type) {

        // update
        case "UPDATE_THE_CONTEXT": 
            return {
                ...state,
                jobs: action.payload
            }

        // show more
        case "SHOW_MORE":
            return {
                ...state,
                thePage: action.payload.page,
                jobs: state.jobs.concat(...action.payload.items)
            }

        // filter jobs
        case "FILTER_JOBS":
            return {
                ...state,
                jobs: state.jobs.filter(item => {

                    if (action.payload.fullTime) {
                        return item.title.toLowerCase().includes(action.payload.search.toLowerCase()) && item.location.toLowerCase().includes(action.payload.location.toLowerCase()) && item.type.toLowerCase().includes("full time".toLocaleLowerCase());
                    }
                    return item.title.toLowerCase().includes(action.payload.search.toLowerCase()) && item.location.toLowerCase().includes(action.payload.location.toLowerCase());
    
                })
            }

        default:
            return state
    }

}

export default GlobalReducer;