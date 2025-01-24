import React from "react"

interface SocialLinkProps {
    href: string;
    children: React.ReactNode;
}

/**
 * Wraps children in link that opens the provided URL in a new tab.
 *
 * @component
 * @param {SocialLinkProps} props - The props for the SocialLink component.
 * @param {string} props.href - The URL to be opened when the link is clicked.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the clickable element.
 * @returns {JSX.Element} The rendered SocialLink component.
 *
 * @author SimonLotzkar
 */
const SocialLink: React.FC<SocialLinkProps> = ({href, children}) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className="w-10 md:w-14 2xl:w-20 h-auto transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                {children}
            </div>
        </a>
    )
}

export default SocialLink