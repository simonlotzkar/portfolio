import React from "react";

interface NavSectionLinkProps {
    alt: string;
    name: string;
    sectionId: string;
    activeSection: string;
    textClassName?: string;
}

/**
 * Navigation bar list item with a link to the given section. Shows the given alt
 * and shrinks on small screens, otherwise shows the given name. Underlines itself
 * if it's on the given activeSection. Applies given textClassName to alt and name.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.alt - Optional additional class names for the card container.
 * @param {string} props.name - The title of the project.
 * @param {string} props.sectionId - The description of the project.
 * @param {string} props.activeSection - The URL of the project's image.
 * @param {string} [props.textClassName] - Optional URL to an article related to the project.
 *
 * @returns {JSX.Element} The rendered project card component.
 *
 * @author SimonLotzkar
 */
const NavSectionLink: React.FC<NavSectionLinkProps> = ({ alt, name, sectionId, activeSection, textClassName }) => {
    return (
        <li>
            <a
                href={`/#${sectionId}`}
                className={`
                    p-4 hover:border-b-2 group
                    ${activeSection === sectionId ? "border-b-2 border-accent" : ""}
                `}
            >
                <span className={`${textClassName} sm:hidden`}>{alt}</span>
                <span className={`${textClassName} hidden sm:inline`}>{name}</span>
            </a>
        </li>
    );
};

export default NavSectionLink;
