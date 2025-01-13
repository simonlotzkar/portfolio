import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 relative flex justify-center items-center flex-col overflow-hidden mx-auto">
        <div className="max-w-7xl w-full">
          <HomeSection />
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}