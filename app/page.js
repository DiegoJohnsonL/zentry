import dynamic from "next/dynamic";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { Suspense } from "react";
import Features from "./components/features";
import Contact from "./components/contact";
import About from "./components/about";
import Story from "./components/story";

function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Suspense>
        <Navbar />
      </Suspense>
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
    </main>
  );
}

const HomePage = dynamic(() => Promise.resolve(Home), {
  ssr: false,
});

export default HomePage;
