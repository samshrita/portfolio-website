import styled from "styled-components";
import ProjectCard from "../components/projectCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProjectList from "../data/data";
import { RoutingLinks } from "../data/data";

const A = styled.a`
  display: flex;
  text-align: center;
  align-items: center;
  width: fit-content;
  gap: 0.5rem;
  font-size: 1.4rem;
  font-family: "Space Grotesk", sans-serif;
  padding: 1rem 0rem;
  margin: 1rem 0rem 0rem 0rem;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
  color: var(--accent);

  &:hover {
    color: var(--blue);
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--purple);
  font-family: "Space Grotesk", sans-serif;
`;

const projectList = ProjectList();

function Projects() {
  const renderProjectList = projectList
    .filter((project) => project.isFeatured)
    .map((project) => (
      <ProjectCard
        key={project.id}
        projectRoute={project.projectRoute}
        techUsed={project.techUsed}
        ghubLink={project.ghubLink}
        carouselImg={
          project.targetDevice === "phone"
            ? project.carouselImg.phone
            : project.carouselImg.web
        }
        demoLink={project.demoLink}
        orientation={project.orientation}
        projectCategory={project.projectCategory}
        videoDemo={project.videoDemo}
        projectTitle={project.projectTitle}
        isLive={project.isLive}
        miniDescription={project.miniDescription}
      />
    ));
  return (
    <section className="px-8 pt-16 pb-8 flex justify-center items-center content-center bg-center bg-fixed  bg-[var(--background)]">
      <div className="w-full flex flex-col items-center lg:items-start md:w-4/5 lg:w-4/5">
        <H1>Featured Projects</H1>
        <div className="flex flex-col mb-8 mt-[-2rem] items-center lg:items-end">
          {renderProjectList}
          <A href={RoutingLinks.projects + "/monument-recognition"}>
          </A>
        </div>
          <div className="flex flex-col mb-8 mt-[-2rem] items-center lg:items-end">
          <A href={RoutingLinks.projects + "/deepfake-detection"}>
            More Projects <AiOutlineArrowRight />
          </A>
        </div>
      </div>
    </section>
    
  );
}

export default Projects;
