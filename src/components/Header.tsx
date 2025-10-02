import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";

const Header = () => {
  return (
    <header className="w-full max-w-7xl sticky top-0 p-1 flex justify-between items-center z-20">
      <div className="flex items-center space-x-2 p-1 bg-custom-default rounded-full shadow-lg">
        <Link href="/">
          <Image src="/favicon.ico" alt="Fewd2u Logo" width={40} height={40} />
        </Link>
      </div>
      <Navigation />
    </header>
  );
};
export default Header;
