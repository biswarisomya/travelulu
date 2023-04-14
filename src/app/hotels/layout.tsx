import Header from "@/app/Header/Header";
import Footer from "@/app/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
