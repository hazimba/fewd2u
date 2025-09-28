import Image from "next/image";
import Link from "next/link";
import ModeToggle from "@/components/mode-toggle";
import { Button } from "./ui/button";
import { NAVIGATION_LINKS } from "@/lib/const";
import { DropdownMenuHeader } from "./DropdownMenuHeader";

const Header = () => {
  return (
    <header className="w-full p-4 border-b border-gray-300 flex justify-between items-center">
      <Link href="/">
        <Image src="/favicon.ico" alt="Fewd2u Logo" width={40} height={40} />
      </Link>
      <nav>
        <ul className="flex space-x-4 items-center hidden md:flex">
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
            <ModeToggle />
          </li>
        </ul>
        <div className="md:hidden">
          <DropdownMenuHeader />
        </div>
      </nav>
    </header>
  );
};
export default Header;
