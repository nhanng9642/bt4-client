const API_URL = `${import.meta.env.VITE_BASE_URL}`;

export async function registerUser(user) {
    const url = `${API_URL}/user/register`;
    const request = new Request(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })

    const response = await fetch(request);
    const data = await response.json();

    if (!data.success) {
        throw new Error(data.message);
    }
    return data;
}

export async function startServer() {
    const url = `${API_URL}`;
    const request = new Request(url, {
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    })

    const response = await fetch(request);
    
    return response;
}