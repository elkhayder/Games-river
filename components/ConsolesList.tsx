import React from "react";
import Console from "./Console";

type ConsolesListPorps = {};

export type ConsoleType = {
   title: string;
   img: string;
   selected?: boolean;
};

const ConsolesList: React.FC<ConsolesListPorps> = ({}) => {
   const consoles: ConsoleType[] = [
      {
         title: "PlayStation 3",
         img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/PlayStation_3_Logo.svg",
         selected: true,
      },
      {
         title: "PlayStation 2",
         img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11a10a01-ac23-4fea-ad5a-b51f53084159/dc6lzlx-1a4490c9-6fd6-4ce3-a762-da127c774b84.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExYTEwYTAxLWFjMjMtNGZlYS1hZDVhLWI1MWY1MzA4NDE1OVwvZGM2bHpseC0xYTQ0OTBjOS02ZmQ2LTRjZTMtYTc2Mi1kYTEyN2M3NzRiODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.arRAfeWnSnrR7te1jXMwBdHt1lUHs5ut2ir91QHkF0E",
      },
      {
         title: "Nintendo",
         img: "https://www.pngkit.com/png/full/337-3378326_nintendo-logo-nintendo-logo-black-transparent.png",
      },
      {
         title: "Wii",
         img: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Wii.svg",
      },
   ];

   return (
      <div className="consoles-list-container">
         {consoles.map((x) => (
            <Console {...x} key={x.title} />
         ))}
      </div>
   );
};

export default ConsolesList;
