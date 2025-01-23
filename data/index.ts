// Title
export const myName = "Simon Lotzkar";
export const myTitle = "Software Developer (Vancouver, BC)";

// Projects
interface Project {
    title: string;
    subtitle: string;
    description: string;
    img: string;
    date: string;
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

// Experiences
interface Experience {
    title: string;
    company: string;
    startDate: Date;
    endDate?: Date;
    img?: string;
    details: string[];
}
export const myExperiences: Experience[] = [
    {
        title: "Systems Analyst",
        company: "BC Institute of Technology",
        startDate: new Date("2024-06-01"),
        img: "/images/icons/bcit.png",
        details: [
            "Deploy, migrate, image, and decommission computers for faculty and staff.",
            "Quickly troubleshoot and solve computer problems for instructors and students during class.",
            "Complete tickets using Service Now and Cherwell IT Service Management.",
            "Perform maintenance on hardware such as printers, PCs, and peripherals. ",
            "Present comprehensive technical orientations to new students.",
        ]
    },
    {
        title: "Contractor",
        company: "Kingston Geosciences",
        startDate: new Date("2023-06-01"),
        endDate: new Date("2023-08-31"),
        details: [
            "Developed a communications and solar power system for a remote geoscience field camp.",
            "Maintained, adjusted, and troubleshooted the system during operation."
        ]
    }
];

// Education
interface Education {
    title: string;
    school: string;
    startDate: Date;
    endDate: Date;
    img?: string;
    details?: string;
}
export const myEducation: Education[] = [
    {
        title: "CST Diploma",
        school: "BC Institute of Technology",
        startDate: new Date("2023-09-01"),
        endDate: new Date("2024-05-23"),
        img: "/images/icons/bcit.png",
        details: "Computer Systems Technology is a 2 year, 120 credit program. It focuses on the practical skills used in Software Engineering and the theory in Computer Science. Graduates are able to build Full-Stack Applications using Agile Methodologies, Relational Database Design, Object Oriented Programming, Data Structures, and Algorithms. They are also able to perform System Administration with education in Networking, Operating Systems, and Computer Architecture."
    }
];

// Skills
interface Skill {
    name: string;
    img: string;
}
export const mySkills: Skill[] = [
    {
        name: "Firestore",
        img: "/images/icons/firestore.png"
    },
    {
        name: "MongoDB",
        img: "/images/icons/mongodb.png"
    },
    {
        name: "MySQL",
        img: "/images/icons/mysql.png"
    },
    {
        name: "SQLite",
        img: "/images/icons/sqlite.png"
    },
    {
        name: "TypeScript",
        img: "/images/icons/typescript.png"
    },
    {
        name: "JavaScript",
        img: "/images/icons/javascript.png"
    },
    {
        name: "Java",
        img: "/images/icons/java.png"
    },
    {
        name: "Kotlin",
        img: "/images/icons/kotlin.png"
    },
    {
        name: "C#",
        img: "/images/icons/csharp.png"
    },
    {
        name: "C++",
        img: "/images/icons/cpp.png"
    },
    {
        name: "C",
        img: "/images/icons/c.png"
    },
    {
        name: "SQL",
        img: "/images/icons/sql.png"
    },
    {
        name: "R",
        img: "/images/icons/r.png"
    },
    {
        name: "HTML",
        img: "/images/icons/html.png"
    },
    {
        name: "CSS",
        img: "/images/icons/css.png"
    },
    {
        name: "React",
        img: "/images/icons/react.png"
    },
    {
        name: "Next.js",
        img: "/images/icons/nextjs.png"
    },
    {
        name: "Node.js",
        img: "/images/icons/nodejs.png"
    },
    {
        name: ".NET",
        img: "/images/icons/dotnet.png"
    },
    {
        name: "Express",
        img: "/images/icons/express.png"
    },
    {
        name: "Tailwind",
        img: "/images/icons/tailwind.png"
    },
    {
        name: "Bootstrap",
        img: "/images/icons/bootstrap.png"
    },
    {
        name: "JUnit",
        img: "/images/icons/junit.png"
    },
    {
        name: "Linux",
        img: "/images/icons/linux.png"
    },
    {
        name: "Git",
        img: "/images/icons/git.png"
    },
    {
        name: "Docker",
        img: "/images/icons/docker.png"
    },
    {
        name: "Firebase",
        img: "/images/icons/firebase.png"
    },
    {
        name: "Azure",
        img: "/images/icons/azure.png"
    },
    {
        name: "Postman",
        img: "/images/icons/postman.png"
    },
    {
        name: "VSCode",
        img: "/images/icons/vscode.png"
    },
    {
        name: "Android Studio",
        img: "/images/icons/androidstudio.png"
    },
    {
        name: "IntelliJ",
        img: "/images/icons/intellij.png"
    },
    {
        name: "CLion",
        img: "/images/icons/clion.png"
    },
    {
        name: "Eclipse",
        img: "/images/icons/eclipse.png"
    },
    {
        name: "RStudio",
        img: "/images/icons/rstudio.png"
    }
];
