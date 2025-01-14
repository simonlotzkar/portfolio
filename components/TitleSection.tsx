import React from "react"
import { SparklesCore } from "./ui/sparkles"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import SocialLink from "./SocialLink"
import { EmailLink } from "./EmailLink"
import { myName, myTitle } from "@/data/messages"

/**
 * Full-screen display that shows my name, title, and has links to my email, linkedin,
 * and github. Uses a background gradient and has a particle effect in the background.
 * The main text is faded in using a text-generate effect.
 *
 * @component
 * @returns {JSX.Element} The rendered TitleSection component.
 *
 * @author SimonLotzkar
 */
const TitleSection = () => {
    return (
        <section id="title">
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
                    <TextGenerateEffect
                        className="uppercase text-center text-[40px] md:text-5xl lg:text-6l tracking-widest font-bold mb-4"
                        words={myName}
                        duration={0} />
                    {/* FadeInText: My Title. */}
                    <TextGenerateEffect
                        className="text-center text-sm md:text-lg lg:text-2xl tracking-wider font-light mb-4"
                        words={myTitle}
                        duration={0} />
                    {/* Section: Contact links. */}
                    <div className="flex justify-center space-x-6 mt-8">
                        {/* PopupButton: Email. */}
                        <EmailLink email="simonlotzkar@gmail.com">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.287l-12-8.713v12.713h24v-12.713l-12 8.713z" />
                            </svg>
                        </EmailLink>
                        {/* Link: LinkedIn. */}
                        <SocialLink href="https://www.linkedin.com/in/simonlotzkar">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.5c.878-1.314 2.314-2.5 4-2.5 2.485 0 4.5 2.015 4.5 4.5v6.5z" />
                            </svg>
                        </SocialLink>
                        {/* Link: Github. */}
                        <SocialLink href="https://github.com/simonlotzkar">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.18 0 0 1.005-.32 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.55 3.285-1.23 3.285-1.23.655 1.65.245 2.875.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.1.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .32.215.695.825.575C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </SocialLink>
                    </div>
                    {/* Section: Button to scroll to Projects. */}
                    <div className="flex justify-center items-center mt-16">
                        {/* Button: Scroll to Projects. */}
                        <a href="#projects" className="flex items-center justify-center w-10 h-10 border-2 rounded-full shadow-lg border-accent-light hover:bg-secondary transition duration-300">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M12 16.5l-8-8h16l-8 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TitleSection