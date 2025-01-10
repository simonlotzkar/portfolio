import React from "react"
import ProjectCard from "./ProjectCard"
import { myProjects } from "@/data/messages"

// Projects section.
const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-4xl font-bold py-5 text-center text-secondary">Projects</h1>
      <div className="max-w-4xl mx-auto space-y-10">
        {myProjects.map(({ className, title, description, img, hostedLink, githubLink, link, linkName }, i) => (
          <ProjectCard
            key={i}
            title={title}
            description={description}
            className={className}
            img={img}
            hostedLink={hostedLink}
            githubLink={githubLink}
            link={link}
            linkName={linkName}
            />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection