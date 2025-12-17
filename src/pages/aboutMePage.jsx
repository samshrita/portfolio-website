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
          I am currently pursuing my MTech in Computer Science and Engineering at IIT Indore , where I balance academic research with my background as an Associate Cybersecurity Engineer. My professional journey has seen me performing VAPT for Class A and B banks and managing SOC operations through platforms like Wazuh and CrowdStrike. I specialize in the intersection of security and AI, having developed systems to detect deepfakes and recognize monuments in real-time. Essentially, I spend my days building digital guards that can spot a vulnerability or a &apos;fake&apos; faster than a plot twist in my favorite thriller movies.
        </p>
          <br></br>
        <p>

          Beyond the command line, I am a firm believer in community impact and high-energy leadership. As a Board Member of Youth Echo Nepal, I lead internet safety programs in schools and help launch platforms like the Bhaktapur IT Club to foster local innovation. When I&apos;m not defending servers, you&apos;ll likely find me on the futsal court, where I&apos;ve managed to collect a few championship trophies and only a modest number of bruises. My work as a Secretary at Siru Youth Club  allows me to trade server hardening for community service, proving that organizing a youth summit is just as rewarding as securing a network.

        </p>
        <br></br>
        <p>

          Outside of tech and volunteering, I am a Bhaktapur local  with a serious appreciation for the finer things in life: hiking scenic trails, experimenting with photography, and hunting for the world&apos;s best cuisines. I am a CompTIA Security+ and AWS Certified practitioner  who takes my work seriously, but myself? Not so much. Whether I&apos;m immersing myself in music, celebrating local festivals, or debating the merits of a new horror film🍿, I approach life with the same enthusiasm I bring to engineering. I&apos;m always looking for the next challenge that allows me to blend AI, security, and a bit of social impact ideally while staying caffeinated☕.
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
