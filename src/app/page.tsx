import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LoadingButton } from "@/components/LoadingButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h1 className="text-4xl font-bold mt-10">Welcome to Fewd2u</h1>
        <p className="mt-4 text-lg text-gray-600">
          Your go-to platform for exploring and enjoying food.
        </p>
        <LoadingButton
          type="button"
          variant="red"
          text="Explore Food"
          destination="/home"
        />
      </div>
      <Footer />
    </main>
  );
}
