'use client';
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = 'home';

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    currentSection = section.getAttribute('id') || 'home';
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-background/[0.9] p-4 shadow-md z-50">
            <div className="container mx-auto flex items-center justify-center">
                <ul className="flex items-center space-x-1">
                    <li>
                        <a
                            href="#home"
                            className={`p-4 text-secondary-light hover:text-secondary hover:border-b-2 font-bold text-lg ${activeSection === 'home' ? 'border-b-2' : 'border-b-0'}`}
                        >
                            simonlotzkar.com
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={`p-4 hover:text-accent hover:border-b-2 ${activeSection === 'projects' ? 'border-b-2' : 'border-b-0'}`}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`p-4 hover:text-accent hover:border-b-2 ${activeSection === 'contact' ? 'border-b-2' : 'border-b-0'}`}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
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
