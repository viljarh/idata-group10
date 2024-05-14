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

const ProfileButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [isLoginOpen, setLoginOpen] = useState(false)

  const handleLoginClick = () => {
    setLoginOpen(true)
  }

  const closeLoginDialog = () => {
    setLoginOpen(false)
  }

  if (isLoggedIn) {
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
          <Link href="/dashboard/profile">
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard/orders">
            <DropdownMenuItem>My Orders</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">Log Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    return (
      <div className="">
        <LoginDialog isOpen={isLoginOpen} closeModal={closeLoginDialog} />
      </div>
    );
  }
};

export default ProfileButton;
