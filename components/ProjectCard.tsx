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
 * @param {string} [props.articleLink] - Optional URL to an article related to the project.
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
    articleLink,
}: {
    className?: string;
    title: string;
    description: string;
    img: string;
    githubLink?: string;
    hostedLink?: string;
    link?: string;
    linkName?: string;
    articleLink?: string;
}) => {
    return (
        <div className={cn("w-4/5 flex flex-col sm:flex-row justify-center items-center shadow-2xl bg-primary hover:border-4 rounded-lg", className)}>

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
                                GitHub Repository
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
                                Live link
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
                                {linkName} link
                            </a>
                        </li>
                    )}

                    {/* List Item: Article link. */}
                    {articleLink && (
                        <li>
                            <a
                                href={articleLink}
                                className="underline decoration-dotted hover:underline hover:decoration-solid hover:text-accent"
                            >
                                Article link
                            </a>
                        </li>
                    )}
                </ul>
            </div>

            {/* Image: Project image. */}
            <img src={img} alt={title} className="rounded-lg m-4 w-1/2 h-auto max-h-96 object-cover" />
        </div>
    );
};

export default ProjectCard;
