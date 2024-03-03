import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('a')
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method Not Allowed' });
        return;
    }
    console.log('b')

    try {
        console.log('c')
        const { endpoint, bearerToken, payload } = req.body;

        console.log('d')
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearerToken
            },
            body: JSON.stringify(payload)
        });
        console.log('e')

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        console.log('f')

        const responseData = await response.text();
        res.status(200).json({ data: responseData });
    } catch (error: any) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}