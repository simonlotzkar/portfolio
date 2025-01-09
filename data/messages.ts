// Home Section
export const myName = "Simon Lotzkar";
export const myTitle = "Software Developer (Vancouver, BC)";

// Projects Section
interface Project {
    className: string;
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
        className: "project-class-1",
        title: "Project One",
        description: "Description for project one.",
        img: "path/to/image1.jpg",
        githubLink: "https://github.com/user/project-one",
    },
    {
        className: "project-class-2",
        title: "Project Two",
        description: "Description for project two.",
        img: "path/to/image2.jpg",
        githubLink: "https://github.com/user/project-two",
        hostedLink: "https://hostedlink2.com",
    }
];