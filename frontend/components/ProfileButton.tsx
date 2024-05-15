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
import { useAuth } from "@/context/AuthContext";

const ProfileButton = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const closeLoginDialog = () => {
    setLoginOpen(false);
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
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
