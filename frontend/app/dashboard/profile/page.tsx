"use client";
import React, { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get("/api/profile");
      setProfile(response.data.profile);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Container>
      <div className="px-7 py-6">
        <h1 className="font-bold text-4xl">My Profile</h1>
      </div>

      <div className="py-6 px-7">
        {profile ? (
          <div>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
          </div>
        ) : (
          <p className="text-gray-500">Loading profile...</p>
        )}
      </div>
    </Container>
  );
};

export default Profile;
