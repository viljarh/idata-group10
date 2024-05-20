import axiosInstance from "@/axios/axiosInstance";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    if (response.status === 200) {
      return new Response(JSON.stringify(response.data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ message: "Login failed" }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return new Response(JSON.stringify({ message: "Login failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
