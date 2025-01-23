import IndexTitle from "@/components/IndexTitle";
import ProjectCard from "@/components/ProjectCard";
import IndexSection from "@/components/IndexSection";
import { myEducation, myExperiences, myProjects, mySkills } from "@/data";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";
import SkillsCard from "@/components/SkillsCard";

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
        {myExperiences.map(
          (
            {
              title,
              company,
              startDate,
              endDate,
              details,
              img,
            }, i
          ) => (
            <ExperienceCard
              key={i}
              title={title}
              company={company}
              startDate={startDate}
              endDate={endDate}
              details={details}
              img={img}
            />
          )
        )}
      </IndexSection>
      <IndexSection id="education" title="My Education">
        {myEducation.map(
          (
            {
              title,
              school,
              startDate,
              endDate,
              details,
              img,
            }, i
          ) => (
            <EducationCard
              key={i}
              title={title}
              school={school}
              startDate={startDate}
              endDate={endDate}
              details={details}
              img={img}
            />
          )
        )}
      </IndexSection>
      <IndexSection id="skills" title="My Skills">
        <div className="max-w-2xl max-w-[80%] flex flex-wrap gap-1 justify-center items-center">
          {mySkills.map(({ name, img, }, i) => (<SkillsCard key={i} name={name} img={img} />))}
        </div>
      </IndexSection>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="my-10 w-1/6 h-auto p-4 bg-secondary-dark rounded-lg shadow hover:bg-secondary"
      >
        My Resume
      </a>
    </>
  );
}