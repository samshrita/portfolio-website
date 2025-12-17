import styled from "styled-components";
import Card from "../components/card";
import Carousel from "../components/carousel";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiWindowOpen } from "react-icons/bi";
import { Gallery, RoutingLinks, TechnologyList } from "../data/data";
import { useEffect } from "react";
import Education from "../ui/education";
import Experience from "../ui/experience";
const techStackData = TechnologyList();

const CardDiv = styled.div`
  background-color: var(--gray);
  border-radius: 1.7rem;
  box-shadow: 0 0 10px rgba(85, 60, 154, 0.4);
  display: flex;
  height: auto;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  padding: 2rem;
`;

const IconDiv = styled.img`
  height: 3.2rem;
  width: fit-content;
  margin-bottom: 1rem;
  transition: transform 0.2s;
  -webkit-transition: transform 0.2s;

  &:hover {
    transform: scale(1.25);
  }
`;


const H1 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: var(--purple);
`;

const H2 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--purple);
  margin: 4rem 0rem 0rem 0rem;
`;

const H3 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.4rem;
  color: var(--purple);
`;

const H4 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  color: var(--text);
`;

const Button = styled.a`
  background: linear-gradient(to bottom right, var(--purple), var(--accent));
  border: 0;
  border-radius: 24px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0.2rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;

  margin-top: 1rem;
  width: 10rem;
  justify-content: center;

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
function AboutMePage() {
  useEffect(() => {
    document.title = "About | Portfolio";
  }, []);
  const cards = Gallery.img.map((img) => ({
    key: img.imgTitle,
    content: (
      <Card
        imageSrc={Gallery.path + img.imgSrc}
        imageAlt={img.imgAlt}
        imageTitle={img.imgTitle}
      />
    ),
  }));

  const techStackCardList = techStackData.map((cat) => (
    <CardDiv key={cat.title}>
      <div className="border-b-2 border-[#553c9a] w-full ">
        <H3>{cat.title}</H3>
      </div>
      <div className="flex flex-wrap mt-8 place-content-evenly gap-8">
        {cat.technologies.map((tech) =>
          tech.isTechStack ? (
            <div
              key={tech.title}
              className="flex flex-col  px-2 items-center text-center grow md:grow-0"
            >
              <IconDiv
                src={tech.imgSrc}
                alt={tech.imgAlt}
                title={tech.imgTitle}
              ></IconDiv>
              <H4>{tech.title}</H4>
            </div>
          ) : (
            ""
          ),
        )}
      </div>
    </CardDiv>
  ));

  return (
    <div className="w-4/5 pb-20 flex flex-col items-center text-center justify-center lg:w-3/5 ">
      <Carousel cards={cards} offset={2} showArrows={false} />
      <H1>About Me</H1>
          <p>
            I am a cybersecurity professional and current MTech Computer Science student at IIT Indore, where I spend my days (and far too many nights) deciphering the complex world of secure architectures and machine learning. My journey has taken me from performing VAPT for major banks to building AI systems that can spot a deepfake faster than I can spot a good plate of momo. Whether I’m managing SIEM platforms like Wazuh and CrowdStrike or leading penetration tests, I approach every challenge with the same philosophy: security should be as airtight as my favorite thriller movie plot. I’m a CompTIA Security+ and AWS Certified practitioner who believes that while technology evolves, the goal remains the same—building a digital world that is both innovative and incredibly hard to break.
          </p>
            {/* <p>
              I am a recent graduate with a Bachelor&apos;s degree in Computer Engineering, based in Bhaktapur, Nepal. At 22, I am passionate about software development and machine learning, and I&apos;m excited to dive into the tech world. My academic coursework and personal projects have sharpened my skills in these areas. I find the ever-evolving tech industry endlessly fascinating and enjoy exploring both software and hardware innovations. I&apos;m eager to apply my knowledge and creativity as I take the next step in my engineering career.
          </p> */}
          <br />
          <p>
              Outside of coding, I love immersing myself in music, which fuels my creativity and focus. Socializing and participating in local festivals enriches my life, allowing me to connect with my community and celebrate our vibrant culture. I also enjoy hiking scenic trails and experimenting with photography 📷.
          </p>
          <br />
            <p>
              I am a big fan of movies, especially Thriller, romcom, horror🍿, and love trying out new cuisines. I cherish quiet moments but also enjoy social gatherings and parties 🎉. I am enthusiastic about the future and look forward to contributing to the dynamic world of technology.
          </p>
          
<Education />

          

  <div className="flex flex-col w-full my-8 gap-8">{Experience}</div>
      <H2>Technologies I am familar with</H2>
      <div className="flex flex-col w-full my-8 gap-8">{techStackCardList}</div>

      <Button href={RoutingLinks.resume} target="_blank">
        Resume
        <BiWindowOpen />
      </Button>

      <Button href={RoutingLinks.contact}>
        Lets Connect <AiOutlineArrowRight />
      </Button>
    </div>
  );
}
export default AboutMePage;
