import React from "react";
import { EditorProvider } from "../../providers/EditorProvider";
import { LoadingScreenProvider } from "../../providers/LoadingScreenProvider";
import Footer from "./Footer";
import Navbar from "./Navbar";

type _LayoutProps = {
  children: React.ReactNode;
};
const _Layout: React.FC<_LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-body">
      <LoadingScreenProvider>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </LoadingScreenProvider>
    </div>
  );
};

export default _Layout;
