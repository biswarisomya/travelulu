import Header from "@/app/Header/Header";
import Footer from "@/app/Footer/Footer";
import { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
