import { Footer, Header } from "./Blocks";
import {
  About,
  Contact,
  Hero,
  Intrested,
  Portfolio,
  Services,
} from "./Components";
import { Circle } from "./common";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Circle />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Intrested />
      <Footer />
    </div>
  );
};

export default App;
