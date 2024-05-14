import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { email, password } = req.body;

	try {
		const response = await fetch('http://localhost:8080/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		if (response.ok) {
			const data = await response.json();
			res.status(200).json(data);
		} else {
			res.status(response.status).json({ message: 'Login failed' });
		}
	} catch (error) {
		console.error('Error during login:', error);
		res.status(500).json({ message: 'Login failed' });
	}
}
