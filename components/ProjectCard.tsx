import { cn } from '@/lib/utils';
import React from 'react';

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
            <img src={img} alt={title} className="shadow-2xl rounded-lg w-4/5 sm:w-2/3 h-auto max-h-96 object-cover" />
            <div className="sm:ml-4 w-4/5 sm:w-1/3">
                <h2 className="truncate text-xl font-bold text-accent">{title}</h2>
                <p className="whitespace-normal overflow-wrap-break-word">
                    {description}
                </p>
                <ul className="ml-4 mt-4 list-disc list-inside">
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
