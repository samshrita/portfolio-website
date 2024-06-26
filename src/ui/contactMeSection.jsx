import styled from "styled-components";
import {
  AiFillGithub,
  AiOutlineArrowRight,
  AiFillLinkedin,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { RoutingLinks } from "../data/data";

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--purple);
  font-family: "Space Grotesk", sans-serif;
  margin-bottom: 2rem;
`;

const P = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text);
  font-family: "Space Grotesk", sans-serif;
  text-align: justify;
`;
const A = styled.a`
  display: flex;
  text-align: center;
  align-items: center;
  width: fit-content;
  gap: 0.5rem;
  font-size: 1.6rem;
  font-family: "Space Grotesk", sans-serif;
  padding: 1rem 0rem;
  transition: color 0.25s;
  -webkit-transition: color 0.25s;
  color: var(--accent);

  &:hover {
    color: var(--blue);
  }
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
  margin-top: 2rem;

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

function ContactMeSection() {
  return (
    <section className="px-8 py-16 flex justify-center items-center  bg-center bg-fixed bg-[var(--background)]">
      <div className="flex flex-col items-center lg:flex-row w-full md:w-4/5 lg:w-4/5">
        <div className="w-full flex flex-col items-center text-center lg:w-3/5 lg:text-left lg:items-start">
          <H1>Need A Developer? Need A Friend?</H1>
          <P>
            If you&apos;re interested 🤩, shoot me an email or hit me up on
            social media. Best case scenario, we become friends; worst case
            scenario, I&apos;ll bring a smile 😋 to your face and drift apart.
          </P>

          <Button href={RoutingLinks.contact}>
            Lets Connect <AiOutlineArrowRight />
          </Button>
        </div>

        <div className="flex gap-8 w-full justify-center  pt-20 lg:w-2/5 lg:pt-0  lg:justify-end">
          <div className="columns-1">
            <div className="flex items-center">
              <div className="flex-1 bg-[var(--purple)] h-[3px]" />

              <p className="mx-[10px] text-[var(--purple)] font-spaceGrotesk">
                Links
              </p>

              <div className="flex-1 bg-[var(--purple)] h-[3px]" />
            </div>
            <div className="flex gap-6">
              <A href={RoutingLinks.ghub} target="_blank">
                <AiFillGithub />
              </A>
              <A href={RoutingLinks.linkedin} target="_blank">
                <AiFillLinkedin />
              </A>
              <A href={RoutingLinks.mail}>
                <FiMail />
              </A>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactMeSection;
