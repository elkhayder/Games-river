import type { NextPage } from "next";
import ConsolesList from "../components/ConsolesList";
import GamesList from "../components/GamesList";

const Home: NextPage = () => {
   return (
      <>
         <ConsolesList />
         <GamesList />
      </>
   );
};

export default Home;
