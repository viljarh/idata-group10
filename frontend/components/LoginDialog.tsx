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

interface LoginDialogProps {
  isOpen: boolean;
  closeModal: () => void;
}

const LoginDialog = ({ isOpen, closeModal }: LoginDialogProps) => {
  return (
    <Dialog isOpen={isOpen} onDismiss={closeModal}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4">
          Log In
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-6">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Enter your details to log in to your account.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" placeholder="Enter your username" className="mb-4" />

          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" className="mb-4" />

          <Button onClick={closeModal} className="w-full">
            Log In
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;

