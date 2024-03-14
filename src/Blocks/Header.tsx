import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";

const Header: React.FC = () => {
  const [change, setChange] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const Toogle = () => {
    setShow(!show);
  };

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
        <Container
          bg="rgba(255, 255, 255, 0.9)"
          style={{ backdropFilter: "10", WebkitBackdropFilter: "10px" }}
        >
          {show ? (
            <Drop hi="39vh">
              <Link
                to="home"
                duration={500}
                smooth={true}
                offset={-50}
                style={{ width: "100%" }}
                onClick={Toogle}
              >
                <p style={{ marginTop: "40px" }}>Home</p>
              </Link>

              <Link
                style={{ width: "100%" }}
                to="about"
                duration={500}
                smooth={true}
                offset={-50}
                onClick={Toogle}
              >
                <p>About</p>
              </Link>
              <Link
                style={{ width: "100%" }}
                to="services"
                duration={500}
                smooth={true}
                offset={-50}
                onClick={Toogle}
              >
                <p>Services</p>
              </Link>
              <Link
                style={{ width: "100%" }}
                to="portfolio"
                duration={500}
                smooth={true}
                offset={-50}
                onClick={Toogle}
              >
                <p>Portfolio</p>
              </Link>
              <Link
                style={{ width: "100%" }}
                to="contact"
                duration={500}
                smooth={true}
                offset={-50}
                onClick={Toogle}
              >
                <p style={{ borderBottom: "none" }}>Contact</p>
              </Link>
            </Drop>
          ) : null}
          <Wrapper>
            <Left>
              <h2>
                <span style={{ fontFamily: "'Yellowtail', cursive" }}>J</span>
                ohnBosco
              </h2>
            </Left>
            <Right>
              <Link to="home" duration={500} smooth={true} offset={-50}>
                <nav>Home</nav>
              </Link>
              <Link to="about" duration={500} smooth={true} offset={-50}>
                <nav>About</nav>
              </Link>
              <Link to="services" duration={500} smooth={true} offset={-50}>
                <nav>Services</nav>
              </Link>
              <Link to="portfolio" duration={500} smooth={true} offset={-50}>
                <nav>Portfolio</nav>
              </Link>
              <Link to="contact" duration={500} smooth={true} offset={-50}>
                <nav>Contact</nav>
              </Link>
            </Right>
            <Icon size={26} onClick={Toogle} />
          </Wrapper>
        </Container>
      ) : (
        <Container bg="#f5f5f5">
          {show ? (
            <Drop hi="47vh">
              <Link
                style={{ width: "100%" }}
                to="home"
                duration={500}
                smooth={true}
                offset={-50}
                onClick={Toogle}
              >
                <p style={{ marginTop: "50px" }}>Home</p>
              </Link>

              <Link
                style={{ width: "100%" }}
                to="about"
                duration={500}
                smooth={true}
                offset={-50}
                onClick={Toogle}
              >
                <p>About</p>
              </Link>
              <Link
                style={{ width: "100%" }}
                to="services"
                duration={500}
                smooth={true}
                offset={-50}
                onClick={Toogle}
              >
                <p>Services</p>
              </Link>
              <Link
                style={{ width: "100%" }}
                to="portfolio"
                duration={500}
                smooth={true}
                offset={-50}
                onClick={Toogle}
              >
                <p>Portfolio</p>
              </Link>
              <Link
                style={{ width: "100%" }}
                to="contact"
                duration={500}
                smooth={true}
                offset={-50}
                onClick={Toogle}
              >
                <p style={{ borderBottom: "none" }}>Contact</p>
              </Link>
            </Drop>
          ) : null}
          <Wrapper>
            <Left>
              <h2>
                <span style={{ fontFamily: "'Yellowtail', cursive" }}>J</span>
                ohnBosco
              </h2>
            </Left>
            <Right>
              <Link to="home" duration={500} smooth={true} offset={-50}>
                <nav>Home</nav>
              </Link>
              <Link to="about" duration={500} smooth={true} offset={-50}>
                <nav>About</nav>
              </Link>
              <Link to="services" duration={500} smooth={true} offset={-50}>
                <nav>Services</nav>
              </Link>
              <Link to="portfolio" duration={500} smooth={true} offset={-50}>
                <nav>Portfolio</nav>
              </Link>
              <Link to="contact" duration={500} smooth={true} offset={-50}>
                <nav>Contact</nav>
              </Link>
            </Right>
            <Icon size={26} onClick={Toogle} />
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Header;

const Drop = styled.div<{ hi: string }>`
  display: none;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: ${({ hi }) => hi};
    background-color: white;
    position: absolute;
    display: block;
    top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  p {
    margin: 0;
    margin-bottom: 20px;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid lightgray;
    font-size: 19px;
  }
`;

const Icon = styled(AiOutlineMenu)`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const Left = styled.div`
  h2 {
    font-size: 35px;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    display: none;
  }

  nav {
    font-size: 17px;
    margin: 10px;
    cursor: pointer;
  }
`;

const Container = styled.div<{ bg: string }>`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg};
  position: sticky;
  top: 0%;
  z-index: 5;

  @media screen and (max-width: 900px) {
    position: sticky;
    top: 0%;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
