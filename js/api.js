/* API integration with error handling */
const API_ENDPOINT = 'https://api.example.com';

async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API_ENDPOINT}/${endpoint}`);
        if (!response.ok) throw new Error('Network response was not ok.');
        return await response.json();
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
    }
}

// Add more API functions here