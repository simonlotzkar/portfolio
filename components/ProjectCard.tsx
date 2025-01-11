import { cn } from '@/lib/utils';
import React from 'react';

/**
 * Displays an image next to a title/description/links. Puts them next to eachother
 * above small view and on top of eachother otherwise.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.className] - Optional additional class names for the card container.
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - The description of the project.
 * @param {string} props.img - The URL of the project's image.
 * @param {string} [props.githubLink] - Optional URL to the project's GitHub repository.
 * @param {string} [props.hostedLink] - Optional URL to the hosted version of the project.
 * @param {string} [props.link] - Optional additional URL related to the project.
 * @param {string} [props.linkName] - Optional name for the additional link. Defaults to "Link" if not provided.
 *
 * @returns {JSX.Element} The rendered project card component.
 *
 * @author SimonLotzkar
 */
export const ProjectCard = ({
    className,
    title,
    description,
    img,
    githubLink,
    hostedLink,
    link,
    linkName,
}: {
    className?: string;
    title: string;
    description: string;
    img: string;
    githubLink?: string;
    hostedLink?: string;
    link?: string;
    linkName?: string;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col sm:flex-row justify-center items-center",
                className
            )}
        >
            {/* Image: Project image. */}
            <img src={img} alt={title} className="shadow-2xl rounded-lg w-4/5 sm:w-2/3 h-auto max-h-96 object-cover" />

            {/* Section: Project Text. */}
            <div className="sm:ml-4 w-4/5 sm:w-1/3">

                {/* Text: Project title. */}
                <h2 className="truncate text-xl font-bold text-accent">{title}</h2>

                {/* Text: Project description. */}
                <p className="whitespace-normal overflow-wrap-break-word">{description}</p>

                {/* List: Project links. */}
                <ul className="ml-4 mt-4 list-disc list-inside">

                    {/* List Item: GitHub link. */}
                    {githubLink && (
                        <li>
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-dotted hover:underline hover:decoration-solid hover:text-accent"
                            >
                                GitHub Link
                            </a>
                        </li>
                    )}

                    {/* List Item: Hosted link. */}
                    {hostedLink && (
                        <li>
                            <a
                                href={hostedLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-dotted hover:underline hover:decoration-solid hover:text-accent"
                            >
                                Hosted Link
                            </a>
                        </li>
                    )}

                    {/* List Item: Alternative link. */}
                    {link && (
                        <li>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-dotted hover:underline hover:decoration-solid hover:text-accent"
                            >
                                {linkName || "Link"}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;
