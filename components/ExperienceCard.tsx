import React from "react";
import Image from "next/image";

// Returns a string of the 'start date - end date' but omits the year of the start
// date if it's the same year as the end date.
export const getDatePeriodString = (start: Date, end?: Date) => {
    const target = end || new Date();

    if (!end) {
        return `${start.toLocaleDateString("en-US", { year: "numeric", month: "short" })} - Present`;
    } else if (target.getFullYear() === start.getFullYear()) {
        return `${start.toLocaleDateString("en-US", { month: "short" })} - ${end.toLocaleDateString("en-US", { year: "numeric", month: "short" })}`;
    } else {
        return `${start.toLocaleDateString("en-US", { year: "numeric", month: "short" })} - ${end.toLocaleDateString("en-US", { year: "numeric", month: "short" })}`;
    }
};

interface ExperienceCardProps {
    title: string;
    company: string;
    startDate: Date;
    endDate?: Date;
    img?: string;
    details: string[];
}

/**
 * Displays an experience card with a title, company, start date, optional end date,
 * optional image, and list of strings that describe the experience.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the experience.
 * @param {string} props.company - The company of the experience.
 * @param {Date} props.startDate - The start date.
 * @param {Date} [props.endDate] - The optional end date.
 * @param {string} [props.img] - The optional image.
 * @param {string[]} props.description - Sentences describing the experience.
 *
 * @returns {React.FC} The rendered ExperienceCard component.
 *
 * @author SimonLotzkar
 */
const ExperienceCard: React.FC<ExperienceCardProps> = ({
    title,
    company,
    startDate,
    endDate,
    img,
    details
}) => {
    return (
        <div className="w-full flex flex-col">

            {/* Section: Title and date. */}
            <div className="flex flex-col sm:flex-row sm:justify-between">

                {/* Title */}
                <h2 className="truncate text-2xl tracking-wide font-bold text-accent">{title}</h2>

                {/* Date */}
                <span className="w-fit max-w-full bg-primary px-2 my-2 sm:my-0 py-1 sm:ml-2 rounded-lg truncate text-base font-semibold uppercase background-lg shadow-md shadow-slate-900">
                    {getDatePeriodString(startDate, endDate)}
                </span>
            </div>

            {/* Section: Company and image */}
            <div className="flex flex-row items-center mb-2 sm:my-2">

                {/* Image: Company image. */}
                {img && <Image width="64" height="64" src={img} alt={title} className="mr-2 h-8 w-auto border-2 border-slate-900" />}

                {/* Text: Company name. */}
                <h3 className="truncate leading-8 font-semibold uppercase">{company}</h3>
            </div>

            {/* Text: Experience description. */}
            <ul className="list-disc pl-5 text-lg">
                {details.map((line, index) => (
                    <li key={index} className="whitespace-normal overflow-wrap-break-word">
                        {line}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;
