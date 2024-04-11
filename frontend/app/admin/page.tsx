import Container from "@/components/ui/Container";
import Link from "next/link";

const AdminPage = () => {
  return (
    <Container>
      <div className="p-5">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <h1 className="font-bold text-3xl">Admin</h1>
        </div>

        <div className="border-neutral-400 mt-5 p-4 rounded-lg bg-gray-100">
          <ul className="list-none">
            <li>
              <Link href="/manage-post">
                <p className="text-blue-500 hover:underline">Create Post</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p className="text-blue-500 hover:underline">Delete Post</p>
              </Link>
            </li>
            <li>
              <Link href="/manage-post">
                <p className="text-blue-500 hover:underline">Edit Post</p>
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
      </div>
    </Container>
  );
};

export default AdminPage;
