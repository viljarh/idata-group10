import { useState } from "react";
import { useRouter } from "next/router";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

const CreatePostPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Send POST request to your API endpoint (/api/vehicles/create) with formData
      const res = await fetch("/api/vehicles/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        // Redirect to a success page or back to admin page
        router.push("/admin");
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <Container>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        {/* Render form fields here */}
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default CreatePostPage;
