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
    return (
        <nav className="fixed top-0 left-0 w-full bg-background/[0.9] p-4 shadow-md z-50">

            <div className="container mx-auto flex items-center justify-center">

                <ul className="flex items-center space-x-1">

                    {/* Title. */}
                    <li>
                        <a
                            href="/#title"
                            className={"p-4 text-secondary-light hover:text-secondary hover:border-b-2 font-medium text-base"}
                        >
                            simonlotzkar
                        </a>
                    </li>

                    {/* Projects. */}
                    <li>
                        <a
                            href="/#projects"
                            className={"p-4 hover:text-accent hover:border-b-2"}
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
