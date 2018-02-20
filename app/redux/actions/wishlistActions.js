export function populateLists(lists) {
    return {
        type: "POPULATE_LISTS",
        payload: lists
    }
}
export function setLoaded() {
    return {
        type: "FINISHED"
    }
}