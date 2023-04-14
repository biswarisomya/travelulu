import Footer from "@/app/Footer/Footer";
import Header from "@/app/Header/Header";
import { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
