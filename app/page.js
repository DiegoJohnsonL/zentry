import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./components/hero"), { ssr: false });
const About = dynamic(() => import("./components/about"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
}
