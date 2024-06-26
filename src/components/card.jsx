import styled from "styled-components";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: bisque;
  width: 14rem;
  height: fit-content;
  border-radius: 20px;

  @media (min-width: 1024px) {
    width: 20rem;
  }

  & img {
    border-radius: 20px;
  }
`;

function Card({ imageSrc, imageAlt, imageTitle }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <StyledCard
      as={animated.div}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imageSrc} alt={imageAlt} title={imageTitle} />
    </StyledCard>
  );
}

export default Card;
