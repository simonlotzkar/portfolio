import React from "react";
import { SparklesCore } from "../ui/sparkles";
import SocialLink from "../SocialLink";

/**
 * Footer displays social links, has a button to return to the top, and credits.
 * Has a sparkle and glow effect.
 *
 * @component
 * @returns {React.FC} The rendered Footer component.
 *
 * @author SimonLotzkar
 */
const Footer: React.FC = () => {
    return (
        <footer className="relative bg-gradient-to-t from-primary to-background py-4 overflow-hidden">

            {/* Section: Sparkle and glow effects. */}
            <div className="absolute inset-0 h-full w-full">

                {/* Gradients: Creates a symmetrical glow effect. */}
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[4px] w-full blur-md" />
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[2px] w-full" />
                <div className="absolute inset-x-1/4 top-0 bg-gradient-to-r from-transparent via-secondary-light to-transparent h-[8px] w-1/2 blur-lg" />
                <div className="absolute inset-x-1/4 top-0 bg-gradient-to-r from-transparent via-secondary-light to-transparent h-[2px] w-1/2" />

                {/* Radial Gradient: Adds a soft central glow effect. */}
                <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(circle, rgba(255,255,255,0.3) 30%, transparent 80%)]"></div>

                {/* Effect: Sparkles. */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={300}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            {/* Section: Socials, title button, website credits. */}
            <div className="relative text-center flex flex-col sm:flex-row justify-center sm:justify-between items-center">

                {/* Button: Social Links. */}
                <div className="sm:order-1 order-2 pt-4 sm:pt-0 ml-0 sm:ml-[5%] flex flex-row justify-center space-x-6 2xl:space-x-12">

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

                {/* Button: Scroll to Title. */}
                <div className="sm:order-2 order-1 flex flex-col items-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
                    <a href="#title" className="flex items-center justify-center w-14 md:w-16 2xl:w-18 h-14 md:h-16 2xl:h-18 border-4 md:border-5 2xl:border-6 rounded-full shadow-lg border-accent-light hover:bg-secondary transition">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-12 md:w-18 2xl:w-20 h-auto">
                            <path d="M12 7.5l8 8H4l8-8z" />
                        </svg>
                    </a>
                    Back to Top
                </div>

                {/* Text: Website credits. */}
                <div className="sm:order-3 order-3 flex flex-col mr-0 sm:mr-[5%] pt-4 sm:pt-0">
                    <p>This site was built with:</p>
                    <ul className="flex sm:flex-col flex-row">
                        <li>
                            <a
                                href="https://nextjs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-dotted hover:decoration-solid"
                            >
                                Next.js
                            </a>
                            ,
                        </li>
                        <li>
                            <a
                                href="https://tailwindcss.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sm:pl-0 pl-1 underline decoration-dotted hover:decoration-solid"
                            >
                                Tailwind
                            </a>
                            , and
                        </li>
                        <li>
                            <a
                                href="https://ui.aceternity.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sm:pl-0 pl-1 underline decoration-dotted hover:decoration-solid"
                            >
                                AceternityUI
                            </a>
                            .
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;