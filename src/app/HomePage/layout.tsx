import Footer from "@/app/Footer/Footer";
import Header from "@/app/Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
