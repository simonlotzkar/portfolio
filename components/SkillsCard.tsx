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
 * @returns {JSX.Element} The rendered SkillsCard component.
 *
 * @author SimonLotzkar
 */
export const SkillsCard = ({ name, img }: SkillsCardProps) => {
    return (
        <div className="w-24 h-24 flex items-center justify-center p-4 rounded-lg bg-primary text-center shadow-xl shadow-primary-dark hover:bg-primary-dark z-30 hover:scale-105 transition group">
            <div className="">
                {/* Image: Represents the skill with an icon or logo */}
                <Image width="100" height="100" src={img} alt={name} className="items-center flex justify-center object-contain group-hover:scale-150 z-10" />
            </div>
        </div>
    );
};

export default SkillsCard;
