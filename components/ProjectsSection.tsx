import React from "react"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import { myProjects } from "@/data/projectsData"

const ProjectsSection = () => {
  return (
    <section id="projects">
      <BentoGrid>
        {myProjects.map
        ((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default ProjectsSection