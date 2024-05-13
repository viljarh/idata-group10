export async function fetchUsers() {
	try {
		const response = await fetch('http://localhost:8080/users');
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
