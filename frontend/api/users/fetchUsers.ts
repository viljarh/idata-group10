import { UserProps } from "@/types";

export async function fetchUsers(token: string): Promise<UserProps[]> {
	try {
		const response = await fetch('/api/users', {
			headers: {
				'Authorization': `Bearer ${token}`,
			},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch users');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching users:', error);
		return [];
	}
}
