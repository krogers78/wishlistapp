const wishlistReducer = (state = {
    lists: [],
    loaded: false
}, action) => {
    switch (action.type) {
        case "POPULATE_LISTS":
            state = {
                ...state,
                lists: action.payload,
                loaded: true
            }
            break;
        case "FINISHED":
            state = {
                ...state,
                loaded: true
            }
            break;
    }
    return state;
}

export default wishlistReducer;