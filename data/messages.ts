// Home Section
export const myName = "Simon Lotzkar";
export const myTitle = "Software Developer (Vancouver, BC)";

// Projects Section
interface Project {
    className?: string;
    title: string;
    subtitle?: string;
    date?: string;
    description: string;
    img: string;
    articleLink?: string;
    githubLink?: string;
    hostedLink?: string;
    link?: string;
    linkName?: string;
}
export const myProjects: Project[] = [
    {
        title: "Medikate",
        subtitle: "School Project",
        date: "2024, May",
        description: "Medical assistant chatbot using a custom ChatGPT.",
        img: "/images/medikate/medikate-home-landscape.png",
        githubLink: "https://github.com/Danton1/2800-202410-BBY34",
        hostedLink: "https://medikate.onrender.com/",
    },
    {
        title: "Organica",
        subtitle: "Hackathon Finalist",
        date: "2024, Mar 8-10",
        description: "Bulk buy online store for BCIT students to buy directly from farms to reduce costs and improve health.",
        img: "/images/organica/organica-home-landscape.png",
        githubLink: "https://github.com/kamalkdolikay/qds",
        link: "https://devpost.com/software/qds",
        linkName: "Devpost",
    },
    {
        title: "McWorking",
        subtitle: "School Project",
        date: "2023, Sept-Dec",
        description: "McDonalds icecream machine status tracker. ",
        img: "/images/mcworking/mcworking-catalog-landscape.png",
        githubLink: "https://github.com/simonlotzkar/1800_20233_BBYTeam17",
        hostedLink: "https://comp1800-teambby17.web.app/",
    },
    {
        title: "Autoblocks",
        subtitle: "School Project",
        date: "2022, Sept-Dec",
        description: "for Dungeons and Dragons 5th Edition by Wizards of the Coast. This is a tool for dungeon and dragons (D&D) dungeon masters (DMs) to automate non player characters (NPCs).",
        img: "/images/autoblocks/autoblocks-home.png",
        githubLink: "https://github.com/simonlotzkar/autoblocks",
        articleLink: "/articles/autoblocks",
    },
];