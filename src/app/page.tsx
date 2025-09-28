import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    // want to add bgcolor but somehow related to dark mode
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h1 className="text-4xl font-bold mt-10">Welcome to Fewd2u</h1>
        <p className="mt-4 text-lg text-gray-600">
          Your go-to platform for exploring and enjoying food.
        </p>
        <Link href="/home" className="text-white rounded">
          <Button variant="red" className="mt-6">
            Explore Food
          </Button>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
