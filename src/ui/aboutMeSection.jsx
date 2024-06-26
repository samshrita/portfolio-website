import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiWindowOpen } from "react-icons/bi";
import { RoutingLinks } from "../data/data";

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--purple);
  font-family: "Space Grotesk", sans-serif;
  margin-bottom: 2rem;
  text-align: center;
  @media (min-width: 1024px) {
    text-align: end;
  }
`;

const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text);
  font-family: "Space Grotesk", sans-serif;
  text-align: justify;
`;

const Button = styled.a`
  background: linear-gradient(to bottom right, var(--purple), var(--accent));
  border: 0;
  border-radius: 24px;
  color: var(--btntext);
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  width: fit-content;
  align-items: center;
  font-family: "Space Grotesk", sans-serif;
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;

  &:not([disabled]):focus {
    box-shadow:
      0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(85, 60, 154, 0.25),
      0.125rem 0.125rem 1rem rgba(238, 75, 43, 0.25);
  }

  &:not([disabled]):hover {
    box-shadow:
      0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(85, 60, 154, 0.25),
      0.125rem 0.125rem 1rem rgba(238, 75, 43, 0.25);
  }
`;

const StyledImg = styled.img`
  margin: 0 auto;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 2s infinite alternate;

  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2rem);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2rem);
    }
  }
  @media (min-width: 1024px) {
    max-height: 500px;
    height: auto;
    padding: 0rem 2rem;
  }
`;

const A = styled.a`
  display: flex;
  text-align: center;
  align-items: center;
  width: fit-content;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: var(--accent);
  font-family: "Space Grotesk", sans-serif;
  padding: 1rem 0rem;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;

  &:hover {
    color: var(--blue);
  }
`;

function AboutMeSection() {
  return (
    <section className="px-8 py-8 flex justify-center items-center bg-center bg-fixed bg-[var(--background)]">
      <div className="flex flex-col w-full md:w-4/5 lg:w-4/5">
        <H1>About Me</H1>
        <div className=" flex flex-col items-center flex-wrap lg:flex-row lg:items-start">
          <div className="flex py-8 w-3/4 lg:w-1/2 ">
            <StyledImg src="portfolio-code-snippet.png" />
          </div>
          <div className="w-full flex flex-col items-center gap-4 lg:w-1/2 lg:items-start lg:gap-0">
            <P>
              I&apos;m a recent graduate who have completed the Bachelor&apos;s
              degree in Computer Engineering, 🎓 on a path to becoming a
              proficient software developer and machine learning engineer. I
              have hands-on experience in full-stack web development and mobile
              app development through self-initiated projects. I&apos;m
              currently delving into the fascinating field of machine learning.
              <br></br>My passion lies in solving real-world problems through
              creative coding. I&apos;m dedicated to continuous learning,
              teamwork, and crafting efficient, user-friendly solutions. My goal
              is to make a positive impact in the software development and
              engineering world by pushing boundaries and delivering excellence
              in every project. 
            </P>
            <A href={RoutingLinks.about}>
              Learn More <AiOutlineArrowRight />
            </A>
            <div className="w-full flex flex-col items-center py-6 lg:mt-4 lg:items-end">
              <Button href={RoutingLinks.resume} target="_blank">
                <BiWindowOpen /> Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMeSection;
