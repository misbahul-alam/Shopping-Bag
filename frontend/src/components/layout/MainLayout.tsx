import { ReactNode } from "react";
import Header from "./Header";
import Drawer from "./Drawer";
import Footer from "./Footer";

export default function MainLayout({
  children,
  fullWidth = false,
}: {
  children: ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <>
      <Drawer />
      <Header />
      <main className={`${fullWidth ? "" : "px-[5%]"} `}>{children}</main>
      <Footer />
    </>
  );
}
