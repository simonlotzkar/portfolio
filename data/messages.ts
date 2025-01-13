// Home Section
export const myName = "Simon Lotzkar";
export const myTitle = "Software Developer (Vancouver, BC)";

// Projects Section
interface Project {
    className?: string;
    title: string;
    description: string;
    img: string;
    githubLink?: string;
    hostedLink?: string;
    link?: string;
    linkName?: string;
}
export const myProjects: Project[] = [
    {
        title: "Medikate",
        description: "Medical assistant chatbot using a custom ChatGPT.",
        img: "/images/medikate/medikate-thumbnail.png",
        githubLink: "https://github.com/Danton1/2800-202410-BBY34",
        hostedLink: "https://medikate.onrender.com/",
    },
    {
        title: "Organica",
        description: "Bulk buy online store for BCIT students to buy directly from farms to reduce costs and improve health.",
        img: "/images/organica/organica-thumbnail.png",
        githubLink: "https://github.com/kamalkdolikay/qds",
        link: "https://devpost.com/software/qds",
        linkName: "Devpost Link",
    },
    {
        title: "McWorking",
        description: "McDonalds icecream machine status tracker. ",
        img: "/images/mcworking/mcworking-thumbnail.png",
        githubLink: "https://github.com/simonlotzkar/1800_20233_BBYTeam17",
        hostedLink: "https://comp1800-teambby17.web.app/",
    },
    {
        title: "Autoblocks",
        description: "for Dungeons and Dragons 5th Edition by Wizards of the Coast. This is a tool for dungeon and dragons (D&D) dungeon masters (DMs) to automate non player characters (NPCs).",
        img: "/images/autoblocks/autoblocks-thumbnail.png",
        githubLink: "https://github.com/simonlotzkar/autoblocks",
    },
];