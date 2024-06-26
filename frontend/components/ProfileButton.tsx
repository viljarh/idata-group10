import React, { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { UserRound } from "lucide-react";
import { Avatar } from "./ui/avatar";
import LoginDialog from "./LoginDialog";
import { Button } from "./ui/button";
import { useAuth } from "@/context/authContext";

const ProfileButton = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const closeLoginDialog = () => {
    setIsLoginOpen(false);
  };

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <UserRound size={25} height={40} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{user.firstName}</DropdownMenuLabel>
          <Link href="/dashboard/profile">
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>
          <Link href="/dashboard/favorites">
            <DropdownMenuItem>Favorites</DropdownMenuItem>
          </Link>
          <Link href="/dashboard/orders">
            <DropdownMenuItem>My Orders</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout}>Log Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    return (
      <div>
        <Button onClick={handleLoginClick}>Log In</Button>
        <LoginDialog isOpen={isLoginOpen} closeModal={closeLoginDialog} />
      </div>
    );
  }
};

export default ProfileButton;
