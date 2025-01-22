"use client";
import { useEffect, useRef, useState } from "react";
import NavSectionLink from "./NavSectionLink";

/**
 * Fixed navigation bar at the top of the page. Links to the home page sections:
 * Title, Projects, Experience, Education, Skills, and Resume. Underlines which
 * section is in view.
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component.
 *
 * @author SimonLotzkar
 */
const Navbar = () => {
    // Keep state of the activeSection, default to title.
    const [activeSection, setActiveSection] = useState<string>("title");

    // Keep ref to the navbar for calculating its height when adjusting view offset.
    const navbarRef = useRef<HTMLElement | null>(null);

    // Initializes and maintains the activeSection when scrolling.
    useEffect(() => {

        const handleScroll = () => {

            // Get all sections in DOM.
            const sections = document.querySelectorAll("section");

            // Initialize currentSection to title.
            let currentSection = "title";

            // Get the navbar's height using the navbarRef.
            const navbarHeight = navbarRef.current?.getBoundingClientRect().height || 0;

            // Set currentSection to what's currently in view, defaults to title.
            sections.forEach((section) => {

                const rect = section.getBoundingClientRect();

                if (rect.top - navbarHeight <= 0 && rect.bottom - navbarHeight >= 0) {

                    currentSection = section.getAttribute("id") || "title";
                }
            });

            setActiveSection(currentSection);
        };

        // Add event listener for scrolling.
        window.addEventListener("scroll", handleScroll);

        // Remove event listener when Navbar is unmounted.
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav ref={navbarRef} className="fixed top-0 left-0 w-full bg-background/[0.9] p-4 shadow-md z-50 overflow-x-scroll no-scrollbar">

            <div className="container mx-auto flex items-center justify-center">

                <ul className="flex items-center space-x-1">

                    {/* Link: Title section. */}
                    <NavSectionLink
                        alt="🏠"
                        name="simonlotzkar"
                        sectionId="title"
                        activeSection={activeSection}
                        textClassName="font-medium text-secondary-light group-hover:text-secondary"
                    />

                    {/* Link: Projects section. */}
                    <NavSectionLink
                        alt="🚀"
                        name="Projects"
                        sectionId="projects"
                        activeSection={activeSection}
                        textClassName="group-hover:text-accent"
                    />

                    {/* Link: Experience section. */}
                    <NavSectionLink
                        alt="💼"
                        name="Experience"
                        sectionId="experience"
                        activeSection={activeSection}
                        textClassName="group-hover:text-accent"
                    />

                    {/* Link: Education section. */}
                    <NavSectionLink
                        alt="📚"
                        name="Education"
                        sectionId="education"
                        activeSection={activeSection}
                        textClassName="group-hover:text-accent"
                    />

                    {/* Link: Skills section. */}
                    <NavSectionLink
                        alt="🔨"
                        name="Skills"
                        sectionId="skills"
                        activeSection={activeSection}
                        textClassName="group-hover:text-accent"
                    />

                    {/* Link: Resume pdf. */}
                    <li>
                        <a
                            href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                            className="p-4 hover:text-accent hover:border-b-2"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
