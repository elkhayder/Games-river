/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import React from "react";

type GamePorps = {};

export const getServerSideProps: GetServerSideProps<GamePorps> = async (
   context
) => {
   return { props: {} };
};

const Game: React.FC<GamePorps> = ({}) => {
   return (
      <div className="game">
         <div className="poster">
            <img src="/api/poster?id=17108" alt="placeholder" />
         </div>
         <div className="info">
            <h5 className="title">Animals CrossingCrossingCrossingCrossing</h5>
            <RatingBar rating={10} />
         </div>
      </div>
   );
};

export default Game;

type RatingBarProps = {
   rating: number;
};

const RatingBar: React.FC<RatingBarProps> = ({ rating }) => {
   // TODO: Re-do this one is still trash
   const getStarStyle = (rating: number, compareTo: number): string => {
      var style = "far fa-star";

      if (rating + 1 > compareTo) style = "fas fa-star-half-alt";

      if (rating >= compareTo) style = "fas fa-star";

      return style;
   };

   return (
      <div className="rating">
         {Array(5)
            .fill(0)
            .map((_, index) => (
               <i className={getStarStyle(rating / 2, index + 1)} key={index} />
            ))}
      </div>
   );
};
