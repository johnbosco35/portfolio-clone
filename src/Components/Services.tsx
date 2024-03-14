import styled from "styled-components";
import { Card } from "../common";
import pix from "../assets/fullstack.svg";
import pix2 from "../assets/db.svg";
import pix3 from "../assets/apis.svg";
import pix5 from "../assets/new.svg";
import pix4 from "../assets/working.svg";
import pix6 from "../assets/design.svg";

const Services = () => {
  return (
    <Container id="services">
      <h2>Services</h2>
      <h4>What I Do?</h4>
      <Hold>
        <Card
          an="bubbleEffect 1s ease-in-out 3.5s forwards"
          image={pix}
          title="Full Stack Development"
          desc=" Harness the power of (MongoDB, Express.js, React.js, and Node.js) to build scalable and efficient web applications. From concept to execution, I cover every stage of development with utmost  creativity."
        />
        <Card
          an="bubbleEffect 1s ease-in-out 3.8s forwards"
          image={pix4}
          title="Frontend Development"
          desc="Leverage the potential of React.js to develop interactive and visually stunning user interfaces. I implement the best practices in frontend development to create responsive, mobile-friendly, and user-centric designs."
        />
        <Card
          an="bubbleEffect 1s ease-in-out 4.2s forwards"
          image={pix5}
          title="Backend Development"
          desc=" I excel in building scalable and secure backend systems using Node.js and Express.js. With a strong focus on performance and data integrity, I ensure your application runs smoothly even under heavy traffic.

"
        />
        <Card
          an="bubbleEffect 1s ease-in-out 4.4s forwards"
          image={pix2}
          title="Database  Management"
          desc=" Harness the power of MongoDB's NoSQL database to handle large volumes of data efficiently. From database design to migration and maintenance, I guarantee optimal data organization and retrieval."
        />
        <Card
          an="bubbleEffect 1s ease-in-out 4.6s forwards"
          image={pix3}
          title="API Development"
          desc=" Enable seamless communication between your frontend and backend with robust RESTful APIs. I design and implement APIs that facilitate smooth data flow and integration with other services."
        />
        <Card
          an="bubbleEffect 1s ease-in-out 4.8s forwards"
          image={pix6}
          title="UI/UX"
          desc=" I use tools like Figma to create wireframes and interactive prototypes, allowing me to visualize and iterate on the design before starting the development phase. I have an eye to create appealing user interface."
        />
      </Hold>
    </Container>
  );
};

export default Services;

const Hold = styled.div`
  width: 90%;
  min-height: 200px;
  /* background-color: red; */
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;

  @media screen and (min-width: 700px) and (max-width: 1000px) {
    justify-content: normal;
  }

  @media screen and (min-width: 700px) and (max-width: 1000px) {
    justify-content: space-between;
    /* width: 38%; */
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 60px;
  background-color: #f5f5f5;

  h2 {
    font-size: 130px;
    color: transparent;
    -webkit-text-stroke: 1px lightgray;
    text-transform: uppercase;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;

    @media screen and (max-width: 900px) {
      font-size: 80px;
    }
  }

  h4 {
    position: absolute;
    top: 7%;
    margin-left: 20px;
    font-size: 39px;
    margin: 0;

    @media screen and (max-width: 900px) {
      top: 1.3%;
    }
  }
`;
