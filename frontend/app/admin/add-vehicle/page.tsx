"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/ui/Container";
import CarForm from "@/components/CarForm";

const AddVehiclePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Initialize form fields here
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (formData: FormData) => {
    try {
      const res = await fetch("/api/vehicles/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        router.push("/admin");
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <Container>
      <h1>Add Vehicle</h1>
      <CarForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default AddVehiclePage;
