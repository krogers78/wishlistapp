export function populateLists(lists) {
    return {
        type: "POPULATE_LISTS",
        payload: lists
    }
}
export function setLoaded(loaded) {
    return {
        type: "FINISHED",
        payload: loaded
    }
}