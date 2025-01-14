"use client";
import React, { useState, useEffect } from "react";

/**
 * Fixed navigation bar at the top of the page. Active section is underlined.
 * Links to page sections: Title, Projects, and to the Resume file.
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component.
 *
 * @author SimonLotzkar
 */
const Navbar = () => {
    const [activeSection, setActiveSection] = useState<string>("title");

    // Initializes and maintains the activeSection when scrolling.
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "title"; // Initialize to title.

            // Set currentSection to what's currently in view, default to title.
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
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
        <nav className="fixed top-0 left-0 w-full bg-background/[0.9] p-4 shadow-md z-50">

            <div className="container mx-auto flex items-center justify-center">

                <ul className="flex items-center space-x-1">

                    {/* Title. */}
                    <li>
                        <a
                            href="/#title"
                            className={`p-4 text-secondary-light hover:text-secondary hover:border-b-2 font-medium text-base ${activeSection === "title" ? "border-b-2" : "border-b-0"}`}
                        >
                            simonlotzkar
                        </a>
                    </li>

                    {/* Projects. */}
                    <li>
                        <a
                            href="/#projects"
                            className={`p-4 hover:text-accent hover:border-b-2 ${activeSection === "projects" ? "border-b-2" : "border-b-0"}`}
                        >
                            Projects
                        </a>
                    </li>

                    {/* Resume. */}
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
