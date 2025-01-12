import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
        <div className="max-w-7xl w-full">
          <HomeSection />
          <ProjectsSection />
          <AboutSection />
        </div>
      </main>
    </>
  );
}