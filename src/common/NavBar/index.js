import React from 'react';
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles()

  return <nav className={classes.navbar}>
          <a href="index.html"clasName={classes.logo}>Damian Błochowiak</a>
          <ul>
             <li>CONTACT</li>     
          </ul>
  
  
  
  
  
  </nav>
}

export default NavBar;