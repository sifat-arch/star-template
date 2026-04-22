'use client'
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const NavContainer = () => {
   
   const [showNav , setShowNav] = useState(false)

  //  open nev function
  const openNavHandler = () => setShowNav(true)

  const cloneNavHandler = () => setShowNav(false)
  return (
    <div>
      <Nav openNav = {openNavHandler}/>
      <MobileNav showNav= {showNav} closeNav={cloneNavHandler}/>
    </div>
  );
};

export default NavContainer;
