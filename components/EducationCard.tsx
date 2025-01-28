import React from "react";
import Image from "next/image";
import { getDatePeriodString } from "./ExperienceCard";

interface EducationCardProps {
    title: string;
    school: string;
    startDate: Date;
    endDate: Date;
    img?: string;
    details?: string;
}

/**
 * Displays an education card with the title, school, dates, optional image, and details.
 *
 * @param {Object} props - The properties object containing details about the education.
 * @param {string} props.title - The title of the degree or program.
 * @param {string} props.school - The name of the school or institution.
 * @param {Date} props.startDate - The start date of the education.
 * @param {Date} props.endDate - The end date of the education.
 * @param {string} [props.img] - An optional URL for the school's image or logo.
 * @param {string} [props.details] - Optional additional details or description about the education.
 *
 * @returns {React.FC} The rendered EducationCard component.
 *
 * @author SimonLotzkar
 */
const EducationCard: React.FC<EducationCardProps> = ({
    title,
    school,
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

                {/* Dates */}
                <span className="w-fit max-w-full bg-primary px-2 my-2 sm:my-0 py-1 sm:ml-2 rounded-lg truncate text-base font-semibold uppercase background-lg shadow-md shadow-slate-900">
                    {getDatePeriodString(startDate, endDate)}
                </span>
            </div>

            {/* Section: School name and image */}
            <div className="flex flex-row items-center mb-2 sm:my-2">

                {/* Image: School image. */}
                {img && <Image width="64" height="64" src={img} alt={title} className="rounded-sm mr-2 h-8 w-auto border-2 border-slate-900 shadow-md shadow-slate-900" />}

                {/* Text: School name. */}
                <h3 className="truncate leading-8 font-semibold uppercase">{school}</h3>
            </div>

            {/* Text: Education description. */}
            <div className="whitespace-normal overflow-wrap-break-word">
                {details}
            </div>
        </div>
    );
};

export default EducationCard;
