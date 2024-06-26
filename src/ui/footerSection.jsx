import styled from "styled-components";

const P = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Space Grotesk", sans-serif;
  color: var(--purple);
`;

const StyledDiv = styled.div`
  margin: 0 auto;
  width: fit-content;
  text-align: center;
`;

function FooterSection() {
  return (
    <section className="w-full py-8 flex justify-center items-center bg-center bg-fixed bg-gradient-to-br from-[var(--background)]  to-[var(--secondary)]">
      <div className="w-4/5">
        <StyledDiv>
          <P>Copyright © 2024. All rights are reserved</P>
        </StyledDiv>
      </div>
    </section>
  );
}
export default FooterSection;
