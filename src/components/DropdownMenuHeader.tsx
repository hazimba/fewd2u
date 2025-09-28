"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, LayoutList, Menu } from "lucide-react";
import Link from "next/link";
import ModeToggle from "./mode-toggle";

export function DropdownMenuHeader() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Menu className="md:hidden" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuGroup>
          <Link href="/">
            <DropdownMenuItem>
              Home
              <DropdownMenuShortcut>
                <Home />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href="/about">
            <DropdownMenuItem>
              About
              <DropdownMenuShortcut>
                <LayoutList />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Theme
          <DropdownMenuShortcut>
            <ModeToggle toggle />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Button variant="red" className="w-full">
          <Link href="/login" className="text-gray-700 hover:text-gray-900">
            Staff Login
          </Link>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
