"use client";
import React, { useState, useEffect } from "react";

/**
 * Fixed navigation bar at the top of the page. Active section is underlined.
 * Links to page sections: Home, Projects, About, and to the Resume file.
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component.
 *
 * @author SimonLotzkar
 */
const Navbar = () => {
    const [activeSection, setActiveSection] = useState<string>("home");

    // Initializes and maintains the activeSection when scrolling.
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "home"; // Initialize to home.

            // Set currentSection to one currently in view, default to home.
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    currentSection = section.getAttribute("id") || "home";
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
                    <li>
                        <a
                            href="#home"
                            className={`p-4 text-secondary-light hover:text-secondary hover:border-b-2 font-bold text-lg ${activeSection === "home" ? "border-b-2" : "border-b-0"}`}
                        >
                            simonlotzkar
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={`p-4 hover:text-accent hover:border-b-2 ${activeSection === "projects" ? "border-b-2" : "border-b-0"}`}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={`p-4 hover:text-accent hover:border-b-2 ${activeSection === "about" ? "border-b-2" : "border-b-0"}`}
                        >
                            About
                        </a>
                    </li>
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
