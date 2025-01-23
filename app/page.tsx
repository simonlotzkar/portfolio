import IndexTitle from "@/components/IndexTitle";
import ProjectCard from "@/components/ProjectCard";
import IndexSection from "@/components/IndexSection";
import { myProjects } from "@/data";

export default function Page() {
  return (
    <>
      <IndexTitle />
      <IndexSection id="projects" title="My Projects">
        {myProjects.map(
          (
            {
              title,
              subtitle,
              date,
              description,
              img,
              hostedLink,
              githubLink,
              link,
              linkName,
              articleLink,
            }, i
          ) => (
            <ProjectCard
              key={i}
              title={title}
              subtitle={subtitle}
              date={date}
              description={description}
              img={img}
              hostedLink={hostedLink}
              githubLink={githubLink}
              link={link}
              linkName={linkName}
              articleLink={articleLink}
            />
          )
        )}
      </IndexSection>
      <IndexSection id="experience" title="Experience">

      </IndexSection>
    </>
  );
}