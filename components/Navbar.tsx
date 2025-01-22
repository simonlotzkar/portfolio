"use client";
import { useEffect, useState } from "react";

/**
 * Fixed navigation bar at the top of the page. Links to the home page sections:
 * Title, Projects, and to the Resume file.
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component.
 *
 * @author SimonLotzkar
 */
const Navbar = () => {
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-background/[0.9] p-4 shadow-md z-50">

            <div className="container mx-auto flex items-center justify-center">

                <ul className="flex items-center space-x-1">

                    {/* Home. */}
                    <li>
                        <a
                            href="/"
                            className={
                                `p-4 text-secondary-light hover:text-secondary font-medium text-base hover:border-b-2 
                                ${currentPath === "/" ? "border-b-2 border-accent" : ""}`
                            }
                        >
                            Home
                        </a>
                    </li>

                    {/* Projects. */}
                    <li>
                        <a
                            href="/about"
                            className={
                                `p-4 hover:text-accent hover:border-b-2
                                ${currentPath === "/about" ? "border-b-2 border-accent" : ""}`
                            }
                        >
                            About
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
