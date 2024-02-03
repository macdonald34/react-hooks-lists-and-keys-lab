import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
    <a href="#home" key1={links}>home</a>
    <a href="#about" key2={links}> about</a>
    <a href="#projects" key3={links}>projects</a>
  </nav>);
}

export default NavBar;