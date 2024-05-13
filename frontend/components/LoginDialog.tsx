import React from 'react';
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

interface LoginDialogProps {
  isOpen: boolean;
  closeModal: () => void;
}

const LoginDialog = ({ isOpen, closeModal }: LoginDialogProps) => {
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
          <div className='grid gap-2'>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" placeholder='Enter your password' required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
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

