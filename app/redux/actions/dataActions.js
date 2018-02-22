export const populateLists = () => async dispatch => {
    const response = await fetch('http://kloerogers.com/api/list', { method: 'GET' });
    const json = await response.json();
    await dispatch({
        type: "POPULATE_LISTS",
        payload: json
    });
}
export const suggested = () => async dispatch => {
    const response = await fetch('http://kloerogers.com/api/suggested', { method: 'GET' });
    const json = await response.json();
    await dispatch({
        type: "POPULATE_SUGGESTED",
        payload: json
    });
}
export function imageSet(image) {
    return {
        type: "SET_IMAGE",
        payload: image
    }
}

