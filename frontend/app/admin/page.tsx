import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl m-5">Admin Dashboard</h1>
      <div className="m-10">
        <Button variant="link">
          <Link href="/admin/vehicles">Vehicles</Link>
        </Button>
        <Button variant="link">
          <Link href="/admin/users">Users</Link>
        </Button>
      </div>
    </div>
  );
};

export default AdminDashboard;
