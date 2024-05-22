"use client";
import axiosInstance from "@/axios/axiosInstance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    emailAddress: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    customerType: "REGISTRATED",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: { target: { name: string; value: string } }) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = { ...formData, phoneNumber: Number(formData.phoneNumber) };

    console.log("Form data:", formData);

    try {
      await axiosInstance.post("/users", payload);
      alert("User created successfully");
      router.push("/");
    } catch (error) {
      console.error("Signup failed:", error);
      setError("Failed to create user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-6 space-y-4 dark:shadow-gray-800 rounded-md shadow-md w-80"
      >
        <h1 className="text-2xl font-bold text-center">Signup</h1>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="emailAddress">Email</Label>
          <Input
            type="email"
            id="emailAddress"
            name="emailAddress"
            required
            value={formData.emailAddress}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </Button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
