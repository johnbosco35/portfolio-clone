import styled from "styled-components";
import { Projects } from "../common";
import gift from "../assets/GiftCards.jpg";
import doc from "../assets/sics.jpg";
import fur from "../assets/fur.jpg";
import App from "../assets/Appointment site.png"
import Quiz from "../assets/Quiz app.png"
// import todo from "../assets/todo.jpg";

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <h2>Portfolio</h2>
      <h4>Awesome Works</h4>
      <Holding>
        <Projects
          title="Mavericks- Platform for selling GiftCards"
          image={gift}
          link="http://mavericks-frontend.pages.dev"
          desc="The Maverick Giftcard project is an innovative platform designed to facilitate the buying and selling of gift cards between businesses and users. The platform acts as a marketplace where businesses can upload their gift card offerings, and users can browse and purchase these gift cards conveniently."
        />
        <Projects
          title="LyfeCare- Platform to save for health emergencies"
          image={doc}
          link="https://lyfecare.netlify.app/"
          desc="Lyfecare is a transformative platform designed to empower users to save and prepare for health emergencies proactively. The project offers a secure and user-friendly platform that encourages individuals to set aside funds specifically for healthcare-related expenses."
        />
        <Projects
          title="Chy4realFurnitures- Platform for Purchasing furnitures"
          image={fur}
          link="https://chy4realfurniture.pages.dev"
          desc="Chy4Real Furnitures is an innovative online platform that revolutionizes the way users buy furniture. This platform acts as a virtual marketplace, connecting users with a wide selection of high-quality furniture items and enabling them to make convenient purchases from the comfort of their homes."
        />
        {/* <Projects
          title="TodoApp- A simple todo application"
          image={todo}
          link="https://finbarrtodo.netlify.app"
          desc="The Simple Todo App is a user application that focuses solely on task creation and updating to provide a streamlined and intuitive task management experience"
        /> */}
        <Projects
          title="BrightStarClinic- platform for Appointment"
          image={App}
          link="brightstarclinic.com"
          desc="Welcome to Brightstarclinic, your go-to destination for seamless appointment scheduling. Our user-friendly platform is designed to empower both professionals and clients, providing a hassle-free experience from start to finish. Professionals can effortlessly manage their schedules, while clients can easily browse availability and book appointments with just a few clicks. With secure communication channels and instant confirmations, you can trust Brightstarclinic to streamline your scheduling process and enhance client satisfaction. Say goodbye to scheduling headaches and hello to efficiency with Brightstarclinic"
        />
        <Projects
          title="Quiz app- where learning meets fun!"
          image={Quiz}
          link="https://johnbosco35-quiz-app.pages.dev/"
          desc="Welcome to the Quiz app, where learning meets fun! Dive into a world of knowledge and challenge yourself with engaging quizzes on a wide range of topics. Whether you're a trivia enthusiast or a lifelong learner, our app offers something for everyone. With a user-friendly interface and a variety of quiz categories to choose from, you can test your knowledge anytime, anywhere. Join thousands of users who are already enjoying the thrill of competition and the joy of learning."
        />
      </Holding>
    </Container>
  );
};

export default Portfolio;

const Holding = styled.div`
  width: 90%;
  min-height: 200px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 900px) {
    margin-top: 30px;
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

  @media screen and (max-width: 900px) {
    margin-top: 25px;
  }
  /* background-color: #f5f5f5; */

  h2 {
    font-size: 130px;
    color: transparent;
    -webkit-text-stroke: 1px lightgray;
    text-transform: uppercase;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;

    @media screen and (max-width: 900px) {
      font-size: 65px;
    }
  }

  h4 {
    position: absolute;
    top: 6%;
    margin-left: 20px;
    font-size: 39px;
    margin: 0;

    @media screen and (max-width: 900px) {
      top: 1.2%;
      font-size: 29px;
    }
  }
`;
