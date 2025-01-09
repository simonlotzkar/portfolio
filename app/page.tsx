import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <section id="home">
            <Hero />
          </section>
          <section id="projects">
            <Hero />
          </section>
          <section id="about">
            <Hero />
          </section>
        </div>
      </main>
    </>
  );
}