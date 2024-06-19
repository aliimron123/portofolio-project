import Hero from "@/components/module/Hero";
import About from "@/components/module/About";
import WhyMe from "@/components/module/WhyMe";

export default function Home() {
  return (
    <main className="w-full">
      <div>
        <Hero />
        <About />
        <WhyMe />
      </div>
    </main>
  );
}
