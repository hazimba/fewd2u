import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";

const Header = () => {
  return (
    <header className="w-screen sticky top-0 p-1 z-20">
      <div className="flex max-w-7xl mx-auto justify-between items-center px-2">
        <div className="flex max-w-7xl items-center lg:space-x-2 lg:p-2 lg:pr-3 bg-custom-default rounded-full shadow-lg">
          <Link href="/">
            <Image
              src="/favicon.ico"
              alt="Fewd2u Logo"
              width={40}
              height={40}
            />
          </Link>
          <span className="hidden lg:block font-bold text-lg text-gray-800 dark:text-gray-200">
            Fewd2u
          </span>
        </div>
        <Navigation />
      </div>
    </header>
  );
};
export default Header;
