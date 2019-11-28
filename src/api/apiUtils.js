export async function handleResponse(response) {
    if (response.ok) return response.json();
    if (response.status === 400) {
        // so, a server validation error occured.
        // server side validation returns a string error message, so parse as text instead of a json.
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error('Network response was not ok.');
}

export function handleError(error) {
    console.error("API  call failed." + error)
    throw error
}