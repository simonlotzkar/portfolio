import React from "react";
import Image from "next/image";

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
 * @param {Date} props.endDate - The optional end date.
 * @param {string} props.img - The optional image.
 * @param {string[]} props.description - Sentences describing the experience.
 *
 * @returns {JSX.Element} The rendered ExperienceCard component.
 *
 * @author SimonLotzkar
 */
export const ExperienceCard = ({ title, company, startDate, endDate, img, details }: ExperienceCardProps) => {
    return (
        <div className="w-full flex flex-col">
            {/* Section: Title and date. */}
            <div className="flex flex-row justify-between">
                <h2 className="text-ellipsis overflow-hidden whitespace-nowrap text-2xl tracking-wide font-bold text-accent">{title}</h2>
                <span className="bg-primary px-2 py-1 ml-2 rounded-lg text-ellipsis overflow-hidden whitespace-nowrap text-base text-accent-light font-semibold uppercase">{getDatePeriodString(startDate, endDate)}</span>
            </div>

            {/* Section: Company and image */}
            <div className="flex flex-row items-center">

                {/* Image: Company image. */}
                {img && <Image width="30" height="30" src={img} alt={title} className="my-2 rounded-sm shadow-md border-2 border-slate-900 mr-2 w-10 h-auto object-cover" />}

                {/* Text: Company name. */}
                <h3 className="py-1 text-ellipsis overflow-hidden whitespace-nowrap text-base font-semibold uppercase">{company}</h3>
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
