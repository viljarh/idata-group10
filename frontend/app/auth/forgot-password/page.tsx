"use client";
import axiosInstance from "@/axios/axiosInstance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleChange(e: { target: { value: string } }) {
    setEmail(e.target.value);
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await axiosInstance.post("/auth/forgot-password", {
        email,
      });
      console.log("Password reset email sent:", response.data);
      setMessage("Password reset email sent. Please check your inbox.");
    } catch (error: any) {
      console.error(
        "Password reset failed",
        error.response ? error.response.data : error.message
      );
      setError(
        "Failed to send password reset email: " +
          (error.response ? error.response.data.message : error.message)
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-6 space-y-4 rounded shadow-md w-80 mb-10"
      >
        <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
        </div>
        <Button>{loading ? "Sending..." : "Send Reset Link"}</Button>
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
