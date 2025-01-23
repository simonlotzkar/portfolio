import React from "react";

interface ExperienceCardProps {
    title: string;
    company: string;
    startDate: Date;
    endDate?: Date;
    img?: string;
    details: string[];
}

/**
 * Displays an experience card with a title, description, image, and optional links.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - A brief description of the project.
 *
 * @returns {JSX.Element} The rendered project card component.
 *
 * @author SimonLotzkar
 */
export const ExperienceCard = ({ title, company, startDate, endDate, img, details }: ExperienceCardProps) => {
    return (
        <div className="max-w-2xl w-4/5 flex flex-col">
            {/* Section: Title, date, subtitle */}
            <div className="">
                {/* Text: Project title and date. */}
                <h2 className="truncate text-2xl tracking-wide font-bold text-accent flex flex-row justify-between ">
                    {title}
                    <span className="bg-primary px-2 py-1 ml-2 rounded-lg truncate text-base text-accent-light font-semibold uppercase">{startDate.toString()}</span>
                </h2>

                {/* Text: Project subtitle. */}
                <h3 className="py-1 truncate text-base font-semibold uppercase">{company}</h3>
            </div>

            {/* Section: Description and image. */}
            <div className="flex flex-col">

                {/* Text: Project description. */}
                <p className="whitespace-normal overflow-wrap-break-word text-lg">{details}</p>

                {/* Image: Project image. */}
                {img && <img src={img} alt={title} className="rounded-lg py-4 h-auto max-h-96 object-cover" />}
            </div>
        </div>
    );
};

export default ExperienceCard;
