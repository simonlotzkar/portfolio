import { SparklesCore } from "@/components/ui/sparkles";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary to-secondary text-center">

            {/* Effect: Random particles. */}
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={20}
                    className="w-full h-full"
                    particleColor="#FFFFFF" />
            </div>

            {/* Section: Main content. */}
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] z-10">

                {/* FadeInText: My Name. */}
                <h1 className="uppercase text-center text-[40px] md:text-5xl lg:text-6l tracking-widest font-bold mb-4">Error: 404</h1>

                {/* FadeInText: My Title. */}
                <h2 className="text-center text-sm md:text-lg lg:text-2xl tracking-wider font-light mb-4">Page not found!</h2>
            </div>
        </div>
  );
}