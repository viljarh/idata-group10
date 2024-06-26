"use client";
import Link from "next/link";
import Container from "./ui/Container";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Moon, ShoppingCart, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Image from "next/image";
import ProfileButton from "./ProfileButton";
import { useAuth } from "@/context/authContext";
import { useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { user } = useAuth();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/vehicles",
      label: "Vehicles",
    },
    {
      href: "/about",
      label: "About",
    },
    user?.customerType === "ADMIN" && {
      href: "/admin",
      label: "Admin",
    },
  ].filter(Boolean);

  const handleSheetClose = () => {
    setIsSheetOpen(false);
  };
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      href={(route as { href: string; label: string }).href}
                      key={i}
                      onClick={handleSheetClose}
                    >
                      <p className="block px-2 py-1 text-lg">
                        {(route as { href: string; label: string }).label}
                      </p>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0 mt-3">
              <Image
                src="/logo/rentalroulette.png"
                alt="logo"
                height={180}
                width={180}
              />
            </Link>
          </div>

          <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button asChild variant="ghost" key={i}>
                <Link
                  key={i}
                  href={(route as { href: string; label: string }).href}
                  className="text-sm font-medium transition-colors"
                >
                  {(route as { href: string; label: string }).label}
                </Link>
              </Button>
            ))}
          </nav>

          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping Cart"
            >
              <Link href="/dashboard/cart" passHref>
                <ShoppingCart className="h-6 w-6" />
                <span className="sr-only classNamesr-only">Shopping Cart</span>
              </Link>
            </Button>

            <Button
              className="mr-6"
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
