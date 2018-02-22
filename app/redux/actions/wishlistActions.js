export const populateLists = () => async dispatch => {
    const response = await fetch('http://kloerogers.com/api/list', { method: 'GET' });
    const json = await response.json();
    await dispatch({
        type: "POPULATE_LISTS",
        payload: json
    });
}