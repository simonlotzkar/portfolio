import React from "react";

const getWorkPeriodString = (start: Date, end?: Date) => {
    let years = start.getFullYear() - (end ? end.getFullYear() : new Date().getFullYear());
    let months = start.getMonth() - (end ? end.getMonth() : new Date().getMonth()) + years * 12;

    return `${Math.abs(months)} months`;
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
        <div className="max-w-2xl w-4/5 flex flex-col">
            {/* Section: Title and date. */}
            <div className="flex flex-row justify-between">
                <h2 className="text-ellipsis overflow-hidden whitespace-nowrap text-2xl tracking-wide font-bold text-accent">{title}</h2>
                <span className="bg-primary px-2 py-1 ml-2 rounded-lg text-ellipsis overflow-hidden whitespace-nowrap text-base text-accent-light font-semibold uppercase">{getWorkPeriodString(startDate, endDate)}</span>
            </div>

            {/* Section: Company and image */}
            <div className="flex flex-row items-center">

                {/* Image: Company image. */}
                {img && <img src={img} alt={title} className="my-2 rounded-sm shadow-md border-2 border-slate-900 mr-2 w-10 h-auto object-cover" />}

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
