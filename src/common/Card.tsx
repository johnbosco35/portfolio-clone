import styled from "styled-components";
import { iCard } from "../utils/interface";

const Card: React.FC<iCard> = ({ title, desc, image, an }) => {
  return (
    <Container an={an}>
      <Circle>
        <img src={image} alt="" />
      </Circle>
      <h5>{title}</h5>
      <Line></Line>
      <p>{desc}</p>
    </Container>
  );
};

export default Card;

const Line = styled.div`
  width: 40px;
  height: 5px;
  background-color: purple;
  margin-top: 15px;
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f5f5f5;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }
`;

const Container = styled.div<{ an: string }>`
  width: 300px;
  min-height: 200px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  margin-bottom: 20px;
  opacity: 0; /* Start with component hidden */
  animation: ${({ an }) => an};

  @keyframes bubbleEffect {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    70% {
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media screen and (min-width: 700px) and (max-width: 1000px) {
    justify-content: space-between;
    width: 37%;
  }

  h5 {
    font-size: 25px;
    margin: 0;
    margin-top: 25px;
    text-align: center;
  }

  p {
    text-align: center;
    margin: 0;
    margin-top: 25px;
  }
`;
