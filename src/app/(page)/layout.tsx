import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      {/* <div> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default PageLayout;
