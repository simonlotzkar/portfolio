import React from "react";

interface EducationCardProps {
    title: string;
    school: string;
    startDate: Date;
    endDate: Date;
    img?: string;
    details?: string;
}

/**
 * Displays an education card with a title, description, image, and optional links.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - A brief description of the project.
 *
 * @returns {JSX.Element} The rendered project card component.
 *
 * @author SimonLotzkar
 */
export const EducationCard = ({ title, school, startDate, endDate, img, details }: EducationCardProps) => {
    return (
        <div className="max-w-2xl w-4/5 flex flex-col">
            {/* Section: Title and date. */}
            <div className="flex flex-row justify-between">
                <h2 className="text-ellipsis overflow-hidden whitespace-nowrap text-2xl tracking-wide font-bold text-accent">{title}</h2>
                <span className="bg-primary px-2 py-1 ml-2 rounded-lg text-ellipsis overflow-hidden whitespace-nowrap text-base text-accent-light font-semibold uppercase">{endDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long' })}</span>
            </div>

            {/* Section: Company and image */}
            <div className="flex flex-row items-center">

                {/* Image: Company image. */}
                {img && <img src={img} alt={title} className="my-2 rounded-sm shadow-md border-2 border-slate-900 mr-2 w-10 h-auto object-cover" />}

                {/* Text: Company name. */}
                <h3 className="py-1 text-ellipsis overflow-hidden whitespace-nowrap text-base font-semibold uppercase">{school}</h3>
            </div>

            {/* Text: Project description. */}
            <div className="whitespace-normal overflow-wrap-break-word">
                {details}
            </div>
        </div>
    );
};

export default EducationCard;
