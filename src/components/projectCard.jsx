import { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiWindowOpen, BiDownload } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";

const CardDiv = styled.div`
  background-color: #e7eaf6;
  border-radius: 1.7rem;
  box-shadow: 0 0 10px rgba(85, 60, 154, 0.25);
  display: flex;
  align-items: center;
  gap: 3rem;
  height: auto;
  flex-direction: column;
  margin: 4rem 0rem auto;
  width: 100%;
  padding: 2rem 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: normal;
  }
`;

const ProjectCategory = styled.div`
  border-radius: 24px;
  background: var(--accent);
  color: var(--btntext);
  height: auto;
  width: fit-content;

  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  text-align: center;
  font-style: italic;
  font-weight: 300;
  font-family: "Space Grotesk", sans-serif;
`;

const ProjectDemoDiv = styled.div`
  height: auto;
  margin: 1rem 0rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width: 40%;
    margin: 0 auto;
  }
`;

const H1 = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--purple);
  font-family: "Space Grotesk", sans-serif;
  text-align: center;
  @media (min-width: 1024px) {
    text-align: ${(props) => (props.$orientation === 0 ? "left" : "right")};
  }
`;

const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text);
  font-family: "Space Grotesk", sans-serif;
  text-align: justify;
`;

const SPAN = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--purple);
  font-family: "Space Grotesk", sans-serif;
  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;
const VL = styled.div`
  display: inline-block;
  height: 2rem;
  width: 0.1rem;
  background: var(--mild-purple);
  border-radius: 0.5rem;
  box-shadow: 0 0 1px var(--mild-purple);
`;
const IconDiv = styled.img`
  height: 2rem;
  width: auto;
  transition: transform 0.2s;
  -webkit-transition: transform 0.2s;

  &:hover {
    transform: scale(1.25);
  }
`;
const A = styled.a`
  display: flex;
  text-align: center;
  align-items: center;
  width: fit-content;
  float: ${(props) => (props.$orientation === 0 ? "left" : "right")};
  gap: 0.5rem;
  font-size: 1.2rem;
  color: var(--accent);
  font-family: "Space Grotesk", sans-serif;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;

  &:hover {
    color: var(--blue);
  }
`;

const ProjectIntroDiv = styled.div`

display: flex;
flex-direction: column;
height: 100%;
margin: 0 auto;
width: 100%;
align-items: center;


border-${(props) => (props.$orientation === 0 ? "right" : "left")}: ${(
  props,
) => (props.$mediaQuery ? "2px solid var(--mild-purple)" : "none")};


  @media (min-width: 1024px) {
    align-items: ${(props) => (props.$orientation === 0 ? "start" : "end")};
    width: 60%;
    padding-${(props) => (props.$orientation === 0 ? "right" : "left")}: 2rem;
   
  }
`;
const IMGFRAME = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, var(--light-accent), var(--light-purple));
  border-radius: 16px;
  height: 80%;
  max-height: 17rem;
  max-width: 100%;
  overflow: hidden;
  cursor: pointer;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(85, 60, 154, 0.4);

  @media only screen and (min-width: 640px) and (max-width: 1024px) {
    max-width: 80%;
  }
`;

// const IMGFRAME_IMG = styled.img`

// transform: translateX(25%);
// transition: 10s ease-in-out 0s;
// &:hover{
//  transform: translateX(-25%);
// transition: 10s ease-in-out 0s;

//     }
//   `

ProjectCard.propTypes = {
  orientation: PropTypes.node.isRequired,
  projectTitle: PropTypes.node.isRequired,
  projectCategory: PropTypes.node.isRequired,
  miniDescription: PropTypes.node.isRequired,
  techUsed: PropTypes.array.isRequired,
  ghubLink: PropTypes.node.isRequired,
  carouselImg: PropTypes.node.isRequired,
  demoLink: PropTypes.node.isRequired,
  projectRoute: PropTypes.node.isRequired,
  isLive: PropTypes.bool.isRequired,
};

function ProjectCard({
  orientation = 0,
  projectTitle,
  projectCategory,
  miniDescription,
  techUsed,
  ghubLink,
  carouselImg,
  demoLink,
  projectRoute,
  isLive,
}) {
  const [mediaQuery, setMediaQuery] = useState(
    window.matchMedia("(min-width: 1024px)").matches,
  );

  useEffect(() => {
    function handleResize() {
      setMediaQuery(window.matchMedia("(min-width: 1024px)").matches);
    }

    // Attach the event listener to the window object
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const listProjectCategory = projectCategory.map((cat) => (
    <ProjectCategory key={cat}>{cat}</ProjectCategory>
  ));
  const listTechUsed = techUsed
    .reduce((acc, tech) => acc.concat(tech.technologies), [])
    .map((tech) => (
      <IconDiv
        key={tech.imgTitle}
        alt={tech.imgAlt}
        title={tech.imgTitle}
        src={tech.imgSrc}
      />
    ));

  if (orientation !== 0 && mediaQuery) {
    return (
      <CardDiv>
        <ProjectDemoDiv>
          <IMGFRAME>
            <Carousel
              autoPlay={2}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
            >
              {carouselImg.map((img) => (
                <div key={img}>
                  {" "}
                  <img
                    className=" h-[17rem]  rounded-[10px] object-contain"
                    src={img.imgSrc}
                    alt={img.imgTitle}
                    title={img.imgTitle}
                  />{" "}
                </div>
              ))}
            </Carousel>
          </IMGFRAME>

          <div className="  h-1/5 flex flex-wrap justify-center items-end gap-16">
            <A href={ghubLink} target="_blank">
              Code <FiGithub />
            </A>
            <A href={demoLink} target="_blank">
              {isLive ? "Live Demo" : "Demo"}
              {isLive ? <BiWindowOpen /> : <BiDownload />}
            </A>
          </div>
        </ProjectDemoDiv>
        <ProjectIntroDiv $mediaQuery={mediaQuery} $orientation={orientation}>
          <H1 orientation={orientation}>{projectTitle}</H1>

          <div className="flex flex-wrap justify-center gap-4 my-8 lg:my-6 lg:justify-end lg:gap-6">
            {listProjectCategory}
          </div>
          <P $orientation={orientation}>{miniDescription}</P>
          <div className=" my-8 flex flex-wrap gap-6 items-center justify-end">
            <SPAN>Tech Used</SPAN>
            <VL />

            {listTechUsed}
          </div>
          <A $orientation={orientation} href={projectRoute}>
            Learn More <AiOutlineArrowRight />
          </A>
        </ProjectIntroDiv>
      </CardDiv>
    );
  } else {
    orientation = 0;

    return (
      <CardDiv>
        <ProjectIntroDiv $mediaQuery={mediaQuery} $orientation={orientation}>
          <H1 $orientation={orientation}>{projectTitle}</H1>

          <div
            className={
              "flex flex-wrap justify-center gap-4 my-8 lg:my-6 lg:justify-normal lg:gap-6"
            }
          >
            {listProjectCategory}
          </div>
          <P $orientation={orientation}>{miniDescription}</P>
          {mediaQuery ? (
            <div className=" my-12 flex flex-wrap gap-6 items-center lg:my-8">
              <SPAN>Tech Used</SPAN>
              <VL />

              {listTechUsed}
            </div>
          ) : (
            <div className=" mt-8 flex flex-col gap-4 items-center">
              <SPAN>Tech Used</SPAN>

              <div className="flex flex-wrap my-4 justify-center gap-6">
                {" "}
                {listTechUsed}
              </div>
            </div>
          )}
          {mediaQuery ? (
            <A $orientation={orientation} href={projectRoute}>
              Learn More <AiOutlineArrowRight />
            </A>
          ) : (
            ""
          )}
        </ProjectIntroDiv>
        <ProjectDemoDiv>
          <IMGFRAME>
            <Carousel
              autoPlay={2}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
            >
              {carouselImg.map((img) => (
                <div key={img}>
                  {" "}
                  <img
                    className=" h-[17rem] rounded-[10px] object-contain"
                    src={img.imgSrc}
                    alt={img.imgTitle}
                    title={img.imgTitle}
                  />{" "}
                </div>
              ))}
            </Carousel>
          </IMGFRAME>

          <div className="h-1/5 flex flex-wrap justify-center items-end gap-12 mt-8 lg:mt-0 lg:gap-16 ">
            <A title="Github Repository" href={ghubLink} target="_blank">
              {mediaQuery ? "Code" : ""} <FiGithub />
            </A>

            {demoLink !== "" ? (
              <A
                title={isLive ? "Live Demo" : "Download App"}
                href={demoLink}
                target="_blank"
              >
                {mediaQuery ? (isLive ? "Live Demo" : "Demo") : ""}

                {isLive ? <BiWindowOpen /> : <BiDownload />}
              </A>
            ) : (
              ""
            )}
          </div>
        </ProjectDemoDiv>
        {!mediaQuery ? (
          <A $orientation={orientation} href={projectRoute}>
            Learn More <AiOutlineArrowRight />
          </A>
        ) : (
          ""
        )}
      </CardDiv>
    );
  }
}
export default ProjectCard;
