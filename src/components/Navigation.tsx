import { NAVIGATION_LINKS } from "@/lib/const";
import Link from "next/link";
import { DropdownMenuHeader } from "./DropdownMenuHeader";
import ModeToggle from "./mode-toggle";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="w-full flex justify-end">
      <ul className="flex space-x-4 items-center hidden md:flex bg-[#F5F5F5] dark:bg-[#020712] px-4 py-2 rounded-full shadow-lg">
        {NAVIGATION_LINKS.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-gray-700 hover:text-gray-900"
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Button variant="red">
            <Link href="/login" className="text-gray-700 hover:text-gray-900">
              Staff Login
            </Link>
          </Button>
        </li>
        <li>
          <ModeToggle toggle />
        </li>
      </ul>
      <div className="md:hidden">
        <DropdownMenuHeader />
      </div>
    </nav>
  );
};
