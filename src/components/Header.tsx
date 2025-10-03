import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";

const Header = () => {
  return (
    <header className="w-full max-w-7xl sticky top-0 p-1 flex justify-between items-center z-20">
      <div className="flex items-center lg:space-x-2 lg:p-2 lg:pr-3 bg-custom-default rounded-full shadow-lg">
        <Link href="/">
          <Image src="/favicon.ico" alt="Fewd2u Logo" width={40} height={40} />
        </Link>
        <span className="hidden lg:block font-bold text-lg text-gray-800 dark:text-gray-200">
          Fewd2u
        </span>
      </div>
      <Navigation />
    </header>
  );
};
export default Header;
