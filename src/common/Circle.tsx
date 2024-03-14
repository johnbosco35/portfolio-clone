import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";
import { useState } from "react";

const Circle = () => {
  const [change, setChange] = useState<boolean>(false);

  const ChangeToggle = () => {
    if (window.scrollY > 70) {
      setChange(true);
    } else {
      setChange(false);
    }
  };
  window.addEventListener("scroll", ChangeToggle);
  return (
    <>
      {change ? (
        <Link to="home" duration={500} smooth={true} offset={-50}>
          <Container>
            <AiOutlineArrowUp size={25} />
          </Container>
        </Link>
      ) : null}
    </>
  );
};

export default Circle;

const Container = styled.div`
  width: 45px;
  height: 45px;
  cursor: pointer;
  background-color: #827ae0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: fixed;
  right: 0px;
  top: 87%;
  z-index: 20;
  animation: bounce 2s infinite;
  margin-left: 40px;

  @keyframes bounce {
    0%,
    100% {
      transform: translate(-50%, -50%) translateY(0);
    }
    50% {
      transform: translate(-50%, -50%) translateY(-30px);
    }
  }
`;
