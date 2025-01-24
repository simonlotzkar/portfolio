import React from "react";
import Image from "next/image";

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
 * @returns {JSX.Element} The rendered EducationCard component.
 *
 * @author SimonLotzkar
 */
export const EducationCard = ({ title, school, startDate, endDate, img, details }: EducationCardProps) => {
    return (
        <div className="w-full flex flex-col">
            {/* Section: Title and date. */}
            <div className="flex flex-row justify-between">
                <h2 className="text-ellipsis overflow-hidden whitespace-nowrap text-2xl tracking-wide font-bold text-accent">{title}</h2>
                <span className="bg-primary px-2 py-1 ml-2 rounded-lg text-ellipsis overflow-hidden whitespace-nowrap text-base text-accent-light font-semibold uppercase">{endDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long' })}</span>
                <span className="hidden">{startDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long' })}</span>
            </div>

            {/* Section: School name and image */}
            <div className="flex flex-row items-center">

                {/* Image: School image. */}
                {img && <Image width="30" height="30" src={img} alt={title} className="my-2 rounded-sm shadow-md border-2 border-slate-900 mr-2 w-10 h-auto object-cover" />}

                {/* Text: School name. */}
                <h3 className="py-1 text-ellipsis overflow-hidden whitespace-nowrap text-base font-semibold uppercase">{school}</h3>
            </div>

            {/* Text: Education description. */}
            <div className="whitespace-normal overflow-wrap-break-word">
                {details}
            </div>
        </div>
    );
};

export default EducationCard;
