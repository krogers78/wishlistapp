const dataReducer = (state = {
    lists: [],
    loaded: false,
    suggested: [],
    image: {},
    refreshing: false,
}, action) => {
    switch (action.type) {
        case "POPULATE_LISTS":
            state = {
                ...state,
                lists: action.payload,
                loaded: true
            }
            break;
        case "POPULATE_SUGGESTED":
            state = {
                ...state,
                suggested: action.payload
            }
            break;
        case "SET_IMAGE":
            state = {
                ...state,
                image: {
                    url: action.payload,
                    exists: true
                }
            }
            break;
        case "REFRESHING":
            state = {
                ...state,
                refreshing: action.payload
            }
            break;
    }
    return state;
}

export default dataReducer;