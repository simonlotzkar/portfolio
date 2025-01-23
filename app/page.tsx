import IndexTitle from "@/components/IndexTitle";
import ProjectCard from "@/components/ProjectCard";
import IndexSection from "@/components/IndexSection";
import { myProjects } from "@/data/messages";

export default function Page() {
  return (
    <>
      <IndexTitle />
      <IndexSection id="projects" title="My Projects">
        {myProjects.map(
          (
            {
              className,
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
            }
          ) => (
            <ProjectCard
              title={title}
              subtitle={subtitle}
              date={date}
              description={description}
              className={className}
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
    </>
  );
}