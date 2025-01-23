import React from "react";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    subtitle: string;
    description: string;
    img: string;
    date: string;
    githubLink?: string;
    hostedLink?: string;
    link?: string;
    linkName?: string;
    articleLink?: string;
}

/**
 * Displays a project card with a title, description, image, and optional links.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - A brief description of the project.
 * @param {string} props.img - The URL of the project's image.
 * @param {string} props.subtitle - Optional subtitle for the project.
 * @param {string} props.date - Optional date of the project or when it was completed.
 * @param {string} props.githubLink - Optional URL to the project's GitHub repository.
 * @param {string} props.hostedLink - Optional URL to the live or hosted version of the project.
 * @param {string} props.link - Optional additional URL related to the project.
 * @param {string} props.linkName - Optional name for the additional link.
 * @param {string} props.articleLink - Optional URL to an article related to the project.
 *
 * @returns {JSX.Element} The rendered project card component.
 *
 * @author SimonLotzkar
 */
export const ProjectCard = ({
    title,
    subtitle,
    description,
    img,
    githubLink,
    hostedLink,
    link,
    linkName,
    articleLink,
    date,
}: ProjectCardProps) => {
    {/* Button for links */ }
    const LinkButton = ({ href, target, children }: { href: string; target?: string, children: React.ReactNode }) => (
        <a
            href={href}
            target={target}
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-secondary-dark rounded-lg shadow hover:bg-secondary"
        >
            {children}
        </a>
    );

    return (
        <div className="max-w-2xl w-4/5 flex flex-col">
            {/* Section: Title, date, subtitle */}
            <div className="">
                {/* Text: Project title and date. */}
                <h2 className="truncate text-2xl tracking-wide font-bold text-accent flex flex-row justify-between ">
                    {title}
                    <span className="bg-primary px-2 py-1 ml-2 rounded-lg truncate text-base text-accent-light font-semibold uppercase">{date}</span>
                </h2>

                {/* Text: Project subtitle. */}
                <h3 className="py-1 truncate text-base font-semibold uppercase">{subtitle}</h3>
            </div>

            {/* Section: Description and image. */}
            <div className="flex flex-col">

                {/* Text: Project description. */}
                <p className="whitespace-normal overflow-wrap-break-word text-lg">{description}</p>

                {/* Image: Project image. */}
                <Image width="700" height="300" src={img} alt={title} className="rounded-lg py-4 h-auto max-h-96 object-cover"/>
            </div>

            {/* Section: Project links. */}
            <div className="flex flex-wrap gap-2 justify-center">

                {/* List Item: GitHub link. */}
                {githubLink && (
                    <LinkButton href={githubLink} target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.583 0-.287-.01-1.044-.015-2.05-3.338.725-4.042-1.615-4.042-1.615-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.833 2.807 1.303 3.492.997.108-.774.417-1.303.76-1.603-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.467-2.383 1.236-3.222-.124-.303-.536-1.52.117-3.165 0 0 1.01-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.3-1.23 3.3-1.23.653 1.645.241 2.862.118 3.165.77.84 1.236 1.913 1.236 3.222 0 4.61-2.803 5.624-5.473 5.922.43.37.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.217.7.825.58C20.565 22.296 24 17.796 24 12.5 24 5.87 18.63.5 12 .5z" />
                        </svg>
                        GitHub
                    </LinkButton>
                )}

                {/* Link: Hosted site. */}
                {hostedLink && (
                    <LinkButton href={hostedLink} target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M3 12l18-12v24z" />
                        </svg>
                        Live Site
                    </LinkButton>
                )}

                {/* Link: Misc link. */}
                {link && (
                    <LinkButton href={link} target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                            <path d="M10 16.5l6-4.5-6-4.5z" />
                        </svg>
                        {linkName || "Link"}
                    </LinkButton>
                )}

                {/* Link: Article. */}
                {articleLink && (
                    <LinkButton href={articleLink} >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M4 4h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
                        </svg>
                        Read More
                    </LinkButton>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
