import React from "react";

interface SkillsCardProps {
    name: string;
    img: string;
}

/**
 * Displays a small card representing a skill with a name and image.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.name - The name of the skill
 * @param {string} props.img - The URL of the image representing the skill
 *
 * @returns {JSX.Element} The rendered SkillsCard component.
 *
 * @author SimonLotzkar
 */
export const SkillsCard = ({ name, img }: SkillsCardProps) => {
    return (
        <div className="w-24 h-24 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg bg-primary text-center hover:bg-primary hover:scale-105 transition duration-300 group">
            <div className="absolute inset-0 rounded-full max-w-[80%] h-auto translate-x-5 bg-primary-dark shadow-lg shadow-primary-dark "></div>
            {/* Image: Represents the skill with an icon or logo */}
            <img src={img} alt={name} className="max-w-[80%] h-auto object-contain mb-2 group-hover:scale-150" />
        </div>
    );
};

export default SkillsCard;
