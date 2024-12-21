import dynamic from "next/dynamic";
import About from "./components/about";
const Hero = dynamic(() => import("./components/hero"), { ssr: false });
export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
}
