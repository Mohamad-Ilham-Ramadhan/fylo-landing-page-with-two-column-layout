import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Main from "../Main";
import PreFooter from "../PreFooter";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <Main />
      <PreFooter />
      <Footer />
    </>
  );
}
