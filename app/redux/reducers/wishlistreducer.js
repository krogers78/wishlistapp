const wishlistReducer = (state = {
    lists: [],
    loaded: false
}, action) => {
    switch (action.type) {
        case "POPULATE_LISTS":
            state = {
                ...state,
                lists: [...state.lists, action.payload]
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