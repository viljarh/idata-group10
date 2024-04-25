import Container from "@/components/ui/Container";
import Link from "next/link";

const AdminPage = () => {
  return (
    <div className="flex flex-col min-h-screen m-5">
      <div className="flex flex-col h-full w-full justify-center items-center">
        <Container>
          <div>
            <h1 className="font-bold text-3xl">Admin</h1>
          </div>
          <div className="border-neutral-400 mt-5 p-4 rounded-lg bg-gray-100">
            <ul className="list-none">
              <li>
                <Link href="/admin/add-vehicle">
                  <p className="text-blue-500 hover:underline">Add Vehicle</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="text-blue-500 hover:underline">Edit Vehicle</p>
                </Link>
              </li>
              <li>
                <Link href="/manage-post">
                  <p className="text-blue-500 hover:underline">Delete Vehicle</p>
                </Link>
              </li>
              <li>
                <Link href="/users">
                  <p className="text-blue-500 hover:underline">Manage Users</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="text-blue-500 hover:underline">Settings</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="text-blue-500 hover:underline">Order History</p>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AdminPage;
