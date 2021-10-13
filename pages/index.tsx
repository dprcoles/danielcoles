import { About } from "@/components/index";
import type { NextPage } from "next";
import { Wrapper } from "@/components/layout";

const Home: NextPage = () => {
  return (
    <Wrapper page="Home">
      <div className="[ Home ]">
        <div className="[ About ]">
          <About />
        </div>
      </div>
    </Wrapper>
  )
};

export default Home;
