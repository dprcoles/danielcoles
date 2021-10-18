import type { NextPage } from "next";
import { About } from "@/components/index";
import { Wrapper } from "@/components/layout";
import { PageInterface } from "@/types/PageInterface";

const Home: NextPage<PageInterface> = ({ appMounted }) => {
  return (
    <Wrapper page="Home" appMounted={appMounted}>
      <div className="[ Home ]">
        <div className="[ About ]">
          <About />
        </div>
      </div>
    </Wrapper>
  )
};

export default Home;
