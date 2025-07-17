import { ChildProps } from "@/types";
import React from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const HomeLayout = ({ children }: ChildProps) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
