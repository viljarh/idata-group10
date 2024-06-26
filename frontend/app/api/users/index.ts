import type { NextApiRequest, NextApiResponse } from 'next';
import axiosInstance from "@/axios/axiosInstance";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const response = await axiosInstance.get('/users', {
        headers: {
          Authorization: `Bearer ${req.headers.authorization}`,
        },
      });

      if (response.status === 200) {
        return res.status(200).json(response.data);
      } else {
        return res.status(response.status).json({ message: 'Failed to fetch users' });
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Failed to fetch users' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
