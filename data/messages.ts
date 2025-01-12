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
        title: "Autoblocks",
        description: "for Dungeons and Dragons 5th Edition by Wizards of the Coast. This is a tool for dungeon and dragons (D&D) dungeon masters (DMs) to automate non player characters (NPCs).",
        img: "/autoblocks.png",
        githubLink: "https://github.com/simonlotzkar/autoblocks",
    },
    {
        title: "McWorking",
        description: "McDonalds icecream machine status tracker. ",
        img: "/catalog-landscape.png",
        githubLink: "https://github.com/simonlotzkar/1800_20233_BBYTeam17",
        hostedLink: "https://comp1800-teambby17.web.app/",
    },
    {
        title: "Organica",
        description: "Bulk buy online store for BCIT students to buy directly from farms to reduce costs and improve health.",
        img: "/home-landscape.png",
        githubLink: "https://github.com/kamalkdolikay/qds",
        link: "https://devpost.com/software/qds",
        linkName: "Devpost Link",
    },
    {
        title: "Medikate",
        description: "Medical assistant chatbot using a custom ChatGPT.",
        img: "/home.png",
        githubLink: "https://github.com/Danton1/2800-202410-BBY34",
        hostedLink: "https://medikate.onrender.com/",
    }
];

// About Section
interface Fact {
    className?: string;
    title: string;
    description: string;
    img?: string;
    icon?: React.ReactNode;
}
export const myFacts: Fact[] = [
    {
        title: "Education",
        description: "I am a student at the British Columbia Institute of Technology (BCIT) in the Computer Systems Technology program.",
        img: "/bcit.jpg",
        icon: <IconClipboardCopy className="h-4 w-4" />,
    },
    {
        title: "Experience",
        description: "I have experience working at BCIT as a teaching assistant.",
        img: "/experience.jpg",
        icon: <IconFileBroken className="h-4 w-4" />,
    },
    {
        title: "Mountaineering",
        description: "I enjoy mountaineering and have climbed several peaks.",
        img: "/mountaineering.jpg",
        icon: <IconMountain className="h-4 w-4" />,
    },
    {
        title: "Dungeons & Dragons",
        description: "I am an avid Dungeons & Dragons player and dungeon master.",
        img: "/dnd.jpg",
        icon: <IconDice className="h-4 w-4" />,
    },
    {
        title: "Skiing",
        description: "I love skiing during the winter season.",
        img: "/skiing.jpg",
        icon: <IconSnowflake className="h-4 w-4" />,
    },
    {
        title: "Biking",
        description: "I enjoy biking around the city and on trails.",
        img: "/biking.jpg",
        icon: <IconBike className="h-4 w-4" />,
    },
    {
        title: "Backpacking",
        description: "I have gone on several backpacking trips.",
        img: "/backpacking.jpg",
        icon: <IconBackpack className="h-4 w-4" />,
    },
    {
        title: "Video Gaming",
        description: "I enjoy playing video games in my free time.",
        img: "/gaming.jpg",
        icon: <IconJoystick className="h-4 w-4" />,
    },
];