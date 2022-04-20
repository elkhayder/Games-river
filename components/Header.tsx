import React from "react";

type Header = {};

const Header: React.FC<Header> = ({}) => {
   return (
      <header>
         <div className="container">
            <div className="logo">
               <h2>Games River</h2>
            </div>
            <div className="searchbar-container">
               <input type="text" placeholder="Search Games" />
               <i className="far fa-search" />
            </div>
         </div>
      </header>
   );
};

export default Header;
