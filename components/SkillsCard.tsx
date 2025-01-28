import React from "react";
import Image from "next/image";

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
 * @returns {React.FC} The rendered SkillsCard component.
 *
 * @author SimonLotzkar
 */
const SkillsCard: React.FC<SkillsCardProps> = ({
    name,
    img
}) => {
    return (
        <div className="w-24 h-24 flex items-center justify-center p-4 rounded-lg bg-primary text-center shadow-xl shadow-primary-dark hover:bg-primary-dark z-30 hover:scale-105 transition group relative">
            {/* Image: Represents the skill with an icon or logo */}
            <Image width="100" height="100" src={img} alt={name} className="w-[90%] h-[90%] group-hover:scale-150 z-10" />

            {/* Skill name overlay */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <span className="text-lg font-bold">{name}</span>
            </div>
        </div>
    );
};

export default SkillsCard;
