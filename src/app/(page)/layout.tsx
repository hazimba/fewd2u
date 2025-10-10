import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen justify-between flex-col pt-1">
      {/* <div> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default PageLayout;
