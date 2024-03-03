export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method Not Allowed' });
        return;
    }

    try {
        const { endpoint, bearerToken, payload } = req.body;

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearerToken
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const responseData = await response.text();
        res.status(200).json({ data: responseData });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}