import styled from "styled-components";
import {
  AiOutlineContacts,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
//import { FaXTwitter } from "react-icons/fa6";
import Form from "../components/form";
import { RoutingLinks } from "../data/data";
import { useEffect } from "react";

const H1 = styled.h1`
  font-family: "Space Grotesk", sans-serif;
  font-size: 2.2rem;
  font-weight: 500;
  color: var(--purple);
  margin-left: -0.2rem;
`;

const H4 = styled.h4`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  color: var(--text);
  &:hover {
    color: var(--blue);
  }
`;

const H5 = styled.h5`
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  color: var(--purple);
  padding: 0.2rem 0.2rem;
`;

const StyledA = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1rem;
  &:hover {
    color: var(--blue);
  }
`;
const HLdiv = styled.div`
  height: 2px;
  width: 10rem;
  background-color: var(--purple);

  @media (min-width: 1024px) {
    height: 50%;
    width: 2px;
    background-color: var(--purple);
  }
`;

function ContactMePage() {
  useEffect(() => {
    document.title = "Contact | Portfolio";
  }, []);
  return (
    <div className="flex flex-col h-full items-center w-4/5 py-8 lg:h-screen ">
      <div className="flex flex-col items-center gap-8 w-full lg:flex-row lg:items-stretch lg:text-left">
        <div className="flex flex-col items-center gap-8 grow lg:w-1/2">
          <div className="flex flex-col gap-12 lg:gap-8">
            <div className="flex flex-col gap-6  lg:gap-4 ">
              <H1>Contact Details</H1>

              <H4>
                <AiOutlineContacts />
                Samshrita Ghimire
              </H4>
              <H4>
                <AiOutlineMail /> ghimiresamshrita@gmail.com
              </H4>
              <H4>
                <AiOutlinePhone />
                +977 XXXX-XXX-XXX
              </H4>
              <H4>
                <HiOutlineLocationMarker />
                Bhaktapur, Nepal
              </H4>
            </div>

            <div className="flex flex-col gap-6 lg:gap-4 ">
              <H1>Social Media Links</H1>

              <StyledA href={RoutingLinks.linkedin} target="_blank">
                <AiOutlineLinkedin />
                Samshrita Ghimire
              </StyledA>
              <StyledA href={RoutingLinks.ghub} target="_blank">
                <AiOutlineGithub />
                Samshrita
              </StyledA>
              {/* <StyledA href={RoutingLinks.twitter} target="_blank">
                <FaXTwitter />
                
              </StyledA> */}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center py-4 lg:flex-col lg:py-0">
          <HLdiv></HLdiv>
          <H5>or</H5>
          <HLdiv></HLdiv>
        </div>
        <div className="w-full mx-8 my-4 grow text-center lg:text-left md:w-3/5 lg:w-1/2">
          <Form />
        </div>
      </div>
    </div>
  );
}
export default ContactMePage;
