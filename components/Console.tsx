/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import React from "react";
import { ConsoleType } from "./ConsolesList";

type ConsolePorps = ConsoleType;

const Console: React.FC<ConsolePorps> = ({ title, img, selected }) => {
   return (
      <div className={classNames("console-container", { selected })}>
         <img src={img} alt={title} className="logo" />
      </div>
   );
};

export default Console;
