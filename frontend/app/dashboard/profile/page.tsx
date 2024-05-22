"use client";
import React from "react";
import Container from "@/components/ui/Container";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";

const Profile = () => {
  const { user, logout } = useAuth();
  return (
    <Container>
      <div className="flex flex-col items-center justify-center p-5">
        <div className="mt-10 p-5 w-1/4 border rounded-lg">
          <h1 className="font-bold text-4xl">My Profile</h1>
          <Label>First Name</Label>
          <Input placeholder={user?.firstName} />
          <Label>Last Name</Label>
          <Input placeholder={user?.lastName} />
          <Label>Email</Label>
          <Input placeholder={user?.emailAddress} />
          <Label>Phone Number</Label>
          <Input placeholder={user?.phoneNumber?.toString()} />
          <Button className="w-full mt-4">Edit</Button>
          <Button className="w-full mt-4" onClick={logout}>
            Log out
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
