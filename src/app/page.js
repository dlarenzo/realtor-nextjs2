import Image from "next/image";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import ListingHeader from "@/components/ListingHeader";

export default function Home() {
  return (
    <div className="">
      {/* HERO */}
      <Hero />
      {/* FEATURES */}
      <Features />

      {/* LISTINGS HEADER */}
      <ListingHeader />
      {/* LISTINGS */}
      {/* SERVICES */}
      <Services />
    </div>
  );
}
