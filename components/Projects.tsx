import React from "react"
import ProjectCard from "./ProjectCard"
import { myProjects } from "@/data/messages"

/**
 * Title and a project card for each project.
 *
 * @component
 * @returns {JSX.Element} The rendered Projects component.
 *
 * @author SimonLotzkar
 */
const Projects = () => {
  return (
    <section id="projects" className="pb-10">
      {/* Text: Projects title. */}
      <h1 className="text-4xl font-bold py-5 text-center text-secondary">Projects</h1>
      {/* Section: Project cards. */}
      <div className="max-w-4xl mx-auto space-y-10 flex flex-col items-center ">
        {myProjects.map(({ className, title, description, img, hostedLink, githubLink, link, linkName, articleLink}, i) => (
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
            articleLink={articleLink}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects