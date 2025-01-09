import React from 'react'

interface SocialLinkProps {
    href: string;
    children: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({href, children}) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                {children}
            </div>
        </a>
    )
}

export default SocialLink