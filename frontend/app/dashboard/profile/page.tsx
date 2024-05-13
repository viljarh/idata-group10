"use client";
import React, { useState, useEffect } from "react";
import Container from "@/components/ui/Container";

const Profile = () => {

  return (
    <Container>
      <div className="px-7 py-6">
        <h1 className="font-bold text-4xl">My Profile</h1>
      </div>
      <div className="py-6 px-7 min-h-screen">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    </Container>
  );
};

export default Profile;
