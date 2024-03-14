import styled from "styled-components";

const Intrested = () => {
  return (
    <Container>
      <Wrapper>
        <h2>Interested to Work With Me?</h2>
        <p>
          Challenge me before wasting your valuable time. I want to work with
          you to create the really cool stuff.
        </p>
        <a
          href="https://wa.me/2348131994772"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          <button>Let's Talk</button>
        </a>
      </Wrapper>
    </Container>
  );
};

export default Intrested;

const Wrapper = styled.div`
  width: 90%;
  height: 280px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin: 0;
    font-size: 40px;

    @media screen and (max-width: 500px) {
      font-size: 30px;
      width: 300px;
      text-align: center;
    }
  }

  button {
    padding: 15px 40px;
    border: none;
    background-color: #827ae0;
    border-radius: 30px;
    font-size: 17px;
    color: white;
    cursor: pointer;
  }
  p {
    width: 500px;
    font-size: 20px;
    text-align: center;

    @media screen and (max-width: 500px) {
      width: 300px;
      font-size: 16px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;
