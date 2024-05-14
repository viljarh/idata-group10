import React, { ChangeEvent, FormEvent, useState } from 'react';
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
import { useRouter } from 'next/navigation';

interface LoginDialogProps {
  isOpen: boolean;
  closeModal: () => void;
}

const LoginDialog = ({ isOpen, closeModal }: LoginDialogProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json();
      if (response.ok) {
        router.push('/')
        localStorage.setItem('token', data.accessToken)
        closeModal()
      } else {
        throw new Error(data.message || "Something went wrong")
      }
    } catch (error) {
      setError(error.message)
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Dialog isOpen={isOpen} onDismiss={closeModal}>
      <DialogTrigger asChild>
        <Button variant="default" className="">
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
        <div className="grid gap-4">
          <form onSubmit={handleLogin}>
            <div className='grid gap-2 mb-4'>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required onChange={handleEmailChange} />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" placeholder='Enter your password' required onChange={handlePasswordChange} />
            </div>
            <Button type="submit" className="w-full mt-4" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </div>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </DialogContent>
    </Dialog >
  );
};

export default LoginDialog;

