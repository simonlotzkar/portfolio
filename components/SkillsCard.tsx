import React from "react";

interface SkillsCardProps {
    name: string;
    img: string;
}

/**
 * Displays a skills card with a name and image.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.name - The name of the skill.
 * @param {string} props.image - An image of the skill.
 *
 * @returns {JSX.Element} The rendered SkillsCard component.
 *
 * @author SimonLotzkar
 */
export const SkillsCard = ({ name, img }: SkillsCardProps) => {
    return (
        <div className="w-10 h-auto flex flex-col">
            <img src={img} alt={name} className="h-auto object-cover" />
            <h6>{name}</h6>
        </div>
    );
};

export default SkillsCard;
