import React from "react";
import Game from "./Game";

import styles from "./styles.module.scss";

type GamesListPorps = {};

const GamesList: React.FC<GamesListPorps> = ({}) => {
   return (
      <div className="games-list-container">
         <Game />
      </div>
   );
};

export default GamesList;
