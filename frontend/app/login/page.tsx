"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    if (data.access_token) {
      localStorage.setItem('token', data.access_token);
      console.log('Logged in!');
    } else {
      console.error('Failed to log in');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
      <Label>
        Email:
        <Input type="text" name="username" value={credentials.username} onChange={handleChange} />
      </Label>
      <Label>
        Password:
        <Input type="password" name="password" value={credentials.password} onChange={handleChange} />
      </Label>
      <Button type="submit">Login</Button>
    </form>
  );
}

