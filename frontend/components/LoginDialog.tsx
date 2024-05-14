"use client"
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import Link from 'next/link';
import { useAuth } from './context/AuthContext';

interface LoginDialogProps {
  isOpen: boolean;
  closeModal: () => void;
}

const LoginDialog = ({ isOpen, closeModal }: LoginDialogProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(email, password)
    closeModal()
  }

  return (
    <Dialog isOpen={isOpen} onDismiss={closeModal}>
      <DialogTrigger asChild>
        <Button variant="default">
          Log In
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-6">
        <DialogHeader>
          <DialogTitle className='text-2xl'>Login</DialogTitle>
          <DialogDescription>
            Enter your details to log in to your account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className='grid gap-2'>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" placeholder='Enter your password' required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </DialogContent>
    </Dialog >
  );
};

export default LoginDialog;

